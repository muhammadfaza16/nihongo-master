import { renderSidebar, initTheme, initGlobalTooltips } from './components/layout.js';
import { initRouter, registerRoute } from './router.js';

import { DashboardView }  from './views/dashboard.js';

// Apply theme immediately (before DOM ready) to avoid flash
initTheme();

function initApp() {
  // Register routes
  registerRoute('/dashboard',   DashboardView);
  registerRoute('/',            DashboardView); // alias for bottom nav #/
  registerRoute('/chapter/:id', (container, params) => import('./views/chapter.js').then(m => m.ChapterView(container, params)));
  registerRoute('/guide',       (container, params) => import('./views/preface.js').then(m => m.PrefaceView(container, params)));
  registerRoute('/minna',       (container, params) => import('./views/minna.js').then(m => m.MinnaView(container, params)));
  registerRoute('/review',      (container, params) => import('./views/review.js').then(m => m.ReviewView(container, params)));
  registerRoute('/writing',     (container, params) => import('./views/writing.js').then(m => m.WritingView(container, params)));
  registerRoute('/kanji',       (container, params) => import('./views/kanji.js').then(m => m.KanjiView(container, params)));
  registerRoute('/curriculum',  (container, params) => import('./views/curriculum.js').then(m => m.CurriculumView(container, params)));
  registerRoute('/glossary',    (container, params) => import('./views/glossary.js').then(m => m.GlossaryView(container, params)));
  registerRoute('/workbook/:id',(container, params) => import('./views/workbook.js').then(m => m.WorkbookView(container, params)));
  registerRoute('/exam/:id',    (container, params) => import('./views/exam.js').then(m => m.ExamView(container, params)));

  // Render static layout
  renderSidebar();
  initGlobalTooltips();

  // Start router (default to dashboard)
  initRouter('/dashboard');
}

// Lucide is deferred — DOMContentLoaded fires after defer scripts are executed
document.addEventListener('DOMContentLoaded', initApp);

