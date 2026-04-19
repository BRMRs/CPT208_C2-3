import React, { useEffect, useMemo, useState } from 'react';
import { S } from '../../../constants/styles';
import { SessionLog } from '../../../types';
import Modal from '../../layout/Modal';

export interface SessionRow {
  date: string;
  routes: number;
  level: string;
  calories: number;
}

export interface SessionHistoryProps {
  sessions: SessionLog[];
  addSession?: (session: SessionLog) => void;
  onOpenLogModal?: () => void;
}

const fatigueMeta = (fatigueLevel?: number) => {
  const value = fatigueLevel ?? 0;
  if (value >= 9) return { label: 'Extreme', color: 'bg-red-500' };
  if (value >= 7) return { label: 'High', color: 'bg-orange-500' };
  if (value >= 4) return { label: 'Moderate', color: 'bg-yellow-500' };
  if (value >= 1) return { label: 'Low', color: 'bg-green-500' };
  return { label: 'N/A', color: 'bg-slate-300' };
};

const SessionHistory: React.FC<SessionHistoryProps> = ({ sessions, addSession, onOpenLogModal }) => {
  const [showLogModal, setShowLogModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState<SessionLog | null>(null);

  const openLogModal = () => {
    if (addSession) {
      setShowLogModal(true);
      return;
    }
    onOpenLogModal?.();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-black text-lg text-slate-900">Recent Sessions</h2>
        <button
          onClick={openLogModal}
          className={`text-xs font-black px-3 py-2 bg-slate-900 text-white rounded-xl ${S.border} ${S.shadowSm} ${S.press}`}
        >
          + Log Session
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {sessions.map((s, i) => (
          <button
            key={`${s.date}-${i}`}
            type="button"
            onClick={() => setSelectedSession(s)}
            className={`w-full text-left flex items-center justify-between bg-white p-4 rounded-2xl ${S.border} ${S.shadowSm} ${S.press}`}
          >
            <div>
              <p className="font-black text-slate-900 flex items-center gap-2">
                {s.date}
                {s.videoUrl && <span title="Video attached">🎬</span>}
              </p>
              <p className="font-semibold text-slate-500 text-xs">{s.level} · {s.routes} routes</p>
            </div>
            <div className="text-right">
              <p className="font-black text-orange-500">{s.calories} cal</p>
            </div>
          </button>
        ))}
      </div>

      <LogSessionModal
        isOpen={showLogModal}
        onClose={() => setShowLogModal(false)}
        addSession={addSession}
      />

      <SessionDetailModal
        session={selectedSession}
        onClose={() => setSelectedSession(null)}
      />
    </div>
  );
};

const fatigueOptions: Array<{ label: string; value: number }> = [
  { label: '😊 Low', value: 2 },
  { label: '😐 Moderate', value: 5 },
  { label: '😤 High', value: 8 },
  { label: '🥵 Extreme', value: 10 },
];

const LogSessionModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  addSession?: (session: SessionLog) => void;
}> = ({ isOpen, onClose, addSession }) => {
  const [routesInput, setRoutesInput] = useState('');
  const [levelInput, setLevelInput] = useState('');
  const [durationInput, setDurationInput] = useState('');
  const [heartRateInput, setHeartRateInput] = useState('');
  const [caloriesInput, setCaloriesInput] = useState('');
  const [fatigueLevel, setFatigueLevel] = useState<number | undefined>(undefined);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState<string>('');

  const fatigueStatus = useMemo(() => fatigueMeta(fatigueLevel), [fatigueLevel]);

  useEffect(() => {
    if (!isOpen) {
      setUploading(false);
      setUploadProgress(0);
    }
  }, [isOpen]);

  const simulateUpload = () => {
    if (uploading) return;
    setUploading(true);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setUploading(false);
          setVideoUrl('mock-video-session.mp4');
          return 100;
        }
        return Math.min(p + 10, 100);
      });
    }, 200);
  };

  const resetForm = () => {
    setRoutesInput('');
    setLevelInput('');
    setDurationInput('');
    setHeartRateInput('');
    setCaloriesInput('');
    setFatigueLevel(undefined);
    setUploading(false);
    setUploadProgress(0);
    setVideoUrl('');
  };

  const handleSubmit = () => {
    if (!routesInput || !levelInput || !durationInput) return;

    const newSession: SessionLog = {
      date: new Date().toISOString().split('T')[0],
      routes: Number(routesInput),
      level: levelInput,
      duration: Number(durationInput),
      heartRate: Number(heartRateInput) || 0,
      calories: Number(caloriesInput) || 0,
      notes: '',
      videoUrl: videoUrl || undefined,
      fatigueLevel: fatigueLevel || undefined,
    };

    addSession?.(newSession);
    resetForm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={() => { resetForm(); onClose(); }} title="Log Session">
      <div className="flex flex-col gap-4">
        <div>
          <label className="font-bold text-slate-500 text-xs uppercase tracking-wider mb-1.5 block">Routes Sent</label>
          <input type="number" value={routesInput} onChange={(e) => setRoutesInput(e.target.value)} placeholder="e.g. 8" className={S.input} />
        </div>

        <div>
          <label className="font-bold text-slate-500 text-xs uppercase tracking-wider mb-1.5 block">Highest Level</label>
          <input type="text" value={levelInput} onChange={(e) => setLevelInput(e.target.value)} placeholder="e.g. V2" className={S.input} />
        </div>

        <div>
          <label className="font-bold text-slate-500 text-xs uppercase tracking-wider mb-1.5 block">Duration (mins)</label>
          <input type="number" value={durationInput} onChange={(e) => setDurationInput(e.target.value)} placeholder="e.g. 60" className={S.input} />
        </div>

        <div className={`bg-slate-50 rounded-2xl p-4 ${S.border}`}>
          <p className="font-black text-slate-900 mb-3">Video</p>
          <button
            type="button"
            onClick={simulateUpload}
            disabled={uploading}
            className={`w-full py-2.5 text-sm font-black rounded-xl bg-indigo-200 text-slate-900 ${S.border} ${S.shadowSm} ${S.press} disabled:opacity-60`}
          >
            🎬 Attach Video
          </button>

          {uploading && (
            <div className="mt-3">
              <div className={`w-full h-2.5 bg-white rounded-full overflow-hidden ${S.border}`}>
                <div className="h-full bg-indigo-500 transition-all duration-200" style={{ width: `${uploadProgress}%` }} />
              </div>
              <p className="text-xs font-black text-indigo-700 mt-1">Uploading... {uploadProgress}%</p>
            </div>
          )}

          {!!videoUrl && !uploading && (
            <div className={`mt-3 w-full h-28 rounded-xl bg-slate-700 flex items-center justify-center text-white text-3xl ${S.border}`}>
              ▶
            </div>
          )}
        </div>

        <div className={`bg-slate-50 rounded-2xl p-4 ${S.border}`}>
          <p className="font-black text-slate-900 mb-3">Smartwatch Data</p>

          <div className="mb-3">
            <label className="font-bold text-slate-500 text-xs uppercase tracking-wider mb-1.5 block">❤️ Heart Rate (BPM)</label>
            <input type="number" value={heartRateInput} onChange={(e) => setHeartRateInput(e.target.value)} placeholder="e.g. 145" className={S.input} />
          </div>

          <div className="mb-3">
            <label className="font-bold text-slate-500 text-xs uppercase tracking-wider mb-1.5 block">🔥 Calories (kcal)</label>
            <input type="number" value={caloriesInput} onChange={(e) => setCaloriesInput(e.target.value)} placeholder="e.g. 320" className={S.input} />
          </div>

          <div>
            <label className="font-bold text-slate-500 text-xs uppercase tracking-wider mb-1.5 block">Fatigue Level</label>
            <div className="grid grid-cols-2 gap-2">
              {fatigueOptions.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setFatigueLevel(option.value)}
                  className={`px-2 py-2 text-xs font-black rounded-xl ${S.border} ${S.press} ${fatigueLevel === option.value ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="mt-3">
              <div className={`w-full h-3 rounded-full bg-slate-200 overflow-hidden ${S.border}`}>
                <div
                  className={`h-full transition-all duration-300 ${fatigueStatus.color}`}
                  style={{ width: `${(fatigueLevel ?? 0) * 10}%` }}
                />
              </div>
              <p className="mt-1 text-xs font-black text-slate-700">{fatigueLevel ?? 0}/10 · {fatigueStatus.label}</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className={`w-full bg-slate-900 text-white font-black text-lg py-3.5 rounded-2xl ${S.border} ${S.shadowSm} ${S.press}`}
        >
          Save Session 💾
        </button>
      </div>
    </Modal>
  );
};

const SessionDetailModal: React.FC<{
  session: SessionLog | null;
  onClose: () => void;
}> = ({ session, onClose }) => {
  if (!session) return null;
  const fatigue = fatigueMeta(session.fatigueLevel);

  return (
    <Modal isOpen={!!session} onClose={onClose} title="Session Details">
      <div className="flex flex-col gap-3">
        <DetailRow label="Date" value={session.date} />
        <DetailRow label="Routes climbed" value={`${session.routes}`} />
        <DetailRow label="Level" value={session.level} />
        <DetailRow label="Duration" value={`${session.duration} min`} />
        <DetailRow label="Heart Rate" value={`${session.heartRate || 0} BPM`} />
        <DetailRow label="Calories" value={`${session.calories || 0} kcal`} />
        <DetailRow label="Fatigue" value={session.fatigueLevel ? `${session.fatigueLevel}/10 · ${fatigue.label}` : 'N/A'} />

        {session.videoUrl && (
          <div className="mt-1">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Video</p>
            <div className={`w-full h-[120px] rounded-xl bg-slate-700 flex flex-col items-center justify-center text-white ${S.border}`}>
              <span className="text-3xl">▶</span>
              <span className="text-xs font-bold mt-1">Video recorded</span>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

const DetailRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className={`flex items-center justify-between p-3 rounded-xl bg-slate-50 ${S.border}`}>
    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</span>
    <span className="text-sm font-black text-slate-900">{value}</span>
  </div>
);

export default SessionHistory;
