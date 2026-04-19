import React, { useState } from 'react';
import { CalendarEvent } from '../../../types';
import { S } from '../../../constants/styles';
import { GYMS_DATA } from '../../../data/mockData';

interface CalendarSectionProps {
  calendarEvents: CalendarEvent[];
  onWriteReview?: (event: CalendarEvent) => void;
}

export const CalendarSection: React.FC<CalendarSectionProps> = ({ calendarEvents, onWriteReview }) => {
  // Default to April 2026 for testing since mock data is in April
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1)); 
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay(); // 0=Sun

  const today = new Date();
  const isToday = (day: number) => today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthShort = monthNames[month];

  const eventsForDay = (day: number) => {
    const dateStr = `${monthShort} ${day}`;
    return calendarEvents.filter(e => e.date === dateStr);
  };

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: startDay }, (_, i) => i);

  const getGymName = (event: CalendarEvent) => {
    if (event.gymName) return event.gymName;
    if (event.gymId) {
      const gym = GYMS_DATA.find(g => g.id === event.gymId);
      return gym ? gym.name : event.gymId;
    }
    return 'Unknown Gym';
  };

  return (
    <div className="flex flex-col gap-4">
      <div className={`bg-white rounded-2xl p-4 ${S.border} ${S.shadow}`}>
        <div className="flex items-center justify-between mb-3">
          <button 
            onClick={() => setCurrentDate(new Date(year, month - 1, 1))} 
            className={`w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-50 font-bold ${S.border} ${S.press}`}
          >
            ◀
          </button>
          <h3 className="text-lg font-black">{monthNames[month]} {year}</h3>
          <button 
            onClick={() => setCurrentDate(new Date(year, month + 1, 1))} 
            className={`w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-50 font-bold ${S.border} ${S.press}`}
          >
            ▶
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
            <div key={i} className="text-center text-xs font-bold text-slate-400">{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {blanks.map(b => (
            <div key={`blank-${b}`} className="w-8 h-8" />
          ))}
          {days.map(day => {
            const dayEvents = eventsForDay(day);
            const isSelected = selectedDay === day;
            const todayClass = isToday(day) ? 'ring-2 ring-slate-900 bg-slate-900 text-white' : '';
            const selectedClass = isSelected && !isToday(day) ? 'bg-slate-100' : '';
            const normalClass = !isToday(day) && !isSelected ? 'hover:bg-slate-50 cursor-pointer' : 'cursor-pointer';

            return (
              <div 
                key={day} 
                onClick={() => setSelectedDay(day)}
                className="flex flex-col items-center justify-start h-10"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${todayClass} ${selectedClass} ${normalClass}`}>
                  {day}
                </div>
                <div className="flex gap-0.5 justify-center mt-0.5 h-1.5">
                  {dayEvents.map((e, i) => {
                    if (i > 2) return null; // Max 3 dots
                    let dotColor = 'bg-slate-400';
                    if (e.type === 'booking') dotColor = 'bg-teal-500';
                    if (e.type === 'social') dotColor = 'bg-orange-500';
                    return <div key={i} className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedDay && (
        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <h4 className="font-black text-slate-900 px-1">Events for {monthNames[month]} {selectedDay}</h4>
          {eventsForDay(selectedDay).length > 0 ? (
            eventsForDay(selectedDay).map(event => (
              <div key={event.id} className={`bg-white rounded-2xl p-3 flex flex-col gap-2 ${S.border} ${S.shadow}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {event.type === 'booking' && <span className="text-lg">🏠</span>}
                    {event.type === 'social' && <span className="text-lg">👥</span>}
                    {event.type === 'personal' && <span className="text-lg">📝</span>}
                    <span className="font-bold text-slate-900">
                      {event.type === 'booking' && getGymName(event)}
                      {event.type === 'social' && event.partnerName}
                      {event.type === 'personal' && 'Personal Note'}
                    </span>
                  </div>
                  {event.type === 'social' && (
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full border border-blue-200">
                      🔄 Synced
                    </span>
                  )}
                </div>
                
                {event.type === 'personal' && event.note && (
                  <p className="text-sm font-medium text-slate-600 ml-7">{event.note}</p>
                )}

                {event.type === 'booking' && event.isExpired && !event.isReviewed && (
                  <button 
                    onClick={() => onWriteReview?.(event)}
                    className={`mt-1 ml-7 bg-slate-900 text-white text-xs font-bold py-2 px-4 rounded-xl self-start ${S.press}`}
                  >
                    Write Review
                  </button>
                )}

                {event.type === 'booking' && event.isExpired && event.isReviewed && (
                  <span className="mt-1 ml-7 text-green-600 text-sm font-bold flex items-center gap-1">
                    Reviewed ✓
                  </span>
                )}
              </div>
            ))
          ) : (
            <p className="text-slate-400 text-sm font-semibold text-center py-4 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
              No climbs planned
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CalendarSection;
