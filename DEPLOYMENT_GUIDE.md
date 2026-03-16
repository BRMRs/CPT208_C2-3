# GitHub Pages 部署指南

本指南将指导你如何将 `BRMRs/CPT208_C2-3` 仓库部署到 GitHub Pages。

## 部署步骤

1. **前提条件**: 确保所有文件已提交并推送到 GitHub `main` 分支。你需要有 GitHub 账号，且拥有该仓库的权限。
2. **进入仓库设置**: 打开浏览器，访问 https://github.com/BRMRs/CPT208_C2-3，点击仓库页面顶部的 "Settings"（设置）选项卡。
3. **找到 Pages 设置**: 在 Settings 页面的左侧导航栏中，找到并点击 "Pages"（页面）选项。
4. **配置部署来源**: 在 "Build and deployment"（构建和部署）部分，将 Source（来源）设置为 "Deploy from a branch"（从分支部署）。
5. **选择分支**: 在 Branch（分支）下拉菜单中选择 "main"，文件夹选择 "/ (root)"（根目录），然后点击 "Save"（保存）。
6. **等待部署**: GitHub 需要约 1-3 分钟来构建和部署网站。你可以在仓库首页的 "Actions" 或 Settings > Pages 页面看到部署状态。
7. **访问网站**: 部署成功后，访问 https://brmrs.github.io/CPT208_C2-3/ 查看你的网站。
8. **后续更新**: 每次推送新代码到 `main` 分支后，GitHub Pages 会自动重新部署（约 1-2 分钟）。
9. **常见问题排查**:
   - **404 错误**: 检查 `index.html` 是否在仓库根目录，分支是否选择了 `main`。
   - **样式不加载**: 检查 `style.css` 路径是否为相对路径（例如 `style.css`，而不是 `/style.css`）。
   - **图片不显示**: 检查图片路径是否为相对路径（例如 `assets/images/rui.jpg`）。
   - **网站是旧版本**: 等待 2-3 分钟后刷新，或清除浏览器缓存。

---
*注意：本仓库包含 `.nojekyll` 文件，这会告诉 GitHub Pages 跳过 Jekyll 处理，直接发布原始 HTML 文件。*
