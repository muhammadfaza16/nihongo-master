import { renderSidebar, initTheme, initGlobalTooltips } from './components/layout.js';
import { initRouter, registerRoute } from './router.js';

import { DashboardView }  from './views/dashboard.js';
import { ChapterView }    from './views/chapter.js';
import { MinnaView }      from './views/minna.js';
import { ReviewView }     from './views/review.js';
import { AiTutorView }   from './views/ai-tutor.js';
import { CurriculumView } from './views/curriculum.js';
import { GlossaryView }   from './views/glossary.js';
import { WorkbookView }   from './views/workbook.js';
import { ExamView }       from './views/exam.js';
import { WritingView }    from './views/writing.js';

// Apply theme immediately (before DOM ready) to avoid flash
initTheme();

function initApp() {
  if (typeof lucide === 'undefined') { setTimeout(initApp, 80); return; }

  // Register routes
  registerRoute('/dashboard',   DashboardView);
  registerRoute('/',            DashboardView); // alias for bottom nav #/
  registerRoute('/chapter/:id', ChapterView);
  registerRoute('/minna',       MinnaView);
  registerRoute('/review',      ReviewView);
  registerRoute('/writing',     WritingView);
  registerRoute('/ai-tutor',    AiTutorView);
  registerRoute('/curriculum',  CurriculumView);
  registerRoute('/glossary',    GlossaryView);
  registerRoute('/workbook/:id',WorkbookView);
  registerRoute('/exam/:id',    ExamView);

  // Render static layout
  renderSidebar();
  initGlobalTooltips();

  // Start router (default to dashboard)
  initRouter('/dashboard');

  // Initial rendering of static icons (e.g. bottom-nav icons)
  if (window.lucide) {
    lucide.createIcons();
  }

  // Refresh Lucide icons on every route change
  window.addEventListener('hashchange', () => {
    setTimeout(() => { if (window.lucide) lucide.createIcons(); }, 60);
  });
}

document.addEventListener('DOMContentLoaded', initApp);
