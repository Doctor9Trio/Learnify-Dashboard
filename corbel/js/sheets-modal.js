/**
 * sheets-modal.js — Global Slide-Out Sheet, Modal Dialog & Toast Controller
 * Manages side sheets (#sheet), modals (#modal), and toasts (#toasts)
 */

let activeSheetCallback = null;
let activeModalCallback = null;

export function initOverlays() {
  const sheet = document.getElementById('sheet');
  const modal = document.getElementById('modal');

  // Backdrop click closes sheet
  if (sheet) {
    sheet.addEventListener('click', (e) => {
      if (e.target === sheet) closeSheet();
    });
    sheet.addEventListener('cancel', (e) => {
      e.preventDefault();
      closeSheet();
    });
  }

  // Backdrop click closes modal
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    modal.addEventListener('cancel', (e) => {
      e.preventDefault();
      closeModal();
    });
  }
}

/**
 * Slide-in Sheet (Right edge)
 */
export function openSheet({ title = '', subtitle = '', body = '', footer = '', onClose = null }) {
  const sheet = document.getElementById('sheet');
  if (!sheet) return;

  activeSheetCallback = onClose;

  sheet.innerHTML = `
    <div class="sheet__box">
      <header class="sheet__header">
        <div class="sheet__titles">
          <h2 class="sheet__title">${title}</h2>
          ${subtitle ? `<p class="sheet__subtitle">${subtitle}</p>` : ''}
        </div>
        <button class="sheet__close" aria-label="Close sheet">
          <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </header>
      <div class="sheet__body">
        ${body}
      </div>
      ${footer ? `<footer class="sheet__footer">${footer}</footer>` : ''}
    </div>
  `;

  sheet.querySelector('.sheet__close')?.addEventListener('click', closeSheet);

  if (!sheet.open) {
    sheet.showModal();
  }
  requestAnimationFrame(() => {
    sheet.classList.add('is-open');
  });
}

export function closeSheet() {
  const sheet = document.getElementById('sheet');
  if (!sheet || !sheet.open) return;

  sheet.classList.remove('is-open');
  setTimeout(() => {
    sheet.close();
    if (activeSheetCallback) {
      activeSheetCallback();
      activeSheetCallback = null;
    }
  }, 220);
}

/**
 * Centered Modal Dialog
 */
export function openModal({ title = '', body = '', footer = '', onClose = null }) {
  const modal = document.getElementById('modal');
  if (!modal) return;

  activeModalCallback = onClose;

  modal.innerHTML = `
    <div class="modal__box">
      <header class="modal__header">
        <h2 class="modal__title">${title}</h2>
        <button class="modal__close" aria-label="Close modal">
          <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </header>
      <div class="modal__body">
        ${body}
      </div>
      ${footer ? `<footer class="modal__footer">${footer}</footer>` : ''}
    </div>
  `;

  modal.querySelector('.modal__close')?.addEventListener('click', closeModal);

  if (!modal.open) {
    modal.showModal();
  }
  requestAnimationFrame(() => {
    modal.classList.add('is-open');
  });
}

export function closeModal() {
  const modal = document.getElementById('modal');
  if (!modal || !modal.open) return;

  modal.classList.remove('is-open');
  setTimeout(() => {
    modal.close();
    if (activeModalCallback) {
      activeModalCallback();
      activeModalCallback = null;
    }
  }, 180);
}

/**
 * Toast Notification
 */
export function showToast(message, type = 'success', duration = 3000) {
  let container = document.getElementById('toasts');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toasts';
    container.className = 'toasts';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <span class="toast__dot"></span>
    <span class="toast__msg">${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('is-visible');
  });

  setTimeout(() => {
    toast.classList.remove('is-visible');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
