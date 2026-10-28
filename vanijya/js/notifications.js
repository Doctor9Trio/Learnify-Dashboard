/**
 * notifications.js — Bell Notifications Popover Controller
 * Toggles #bell-pop, renders recent store events, and handles Mark All Read
 */

import { store } from './store.js';

export function initNotifications() {
  const bellBtn = document.getElementById('bell-btn');
  const pop = document.getElementById('bell-pop');
  const bellDot = document.querySelector('.top-nav__bell-dot');

  if (!bellBtn || !pop) return;

  function renderList() {
    const list = document.getElementById('bell-list');
    if (!list) return;

    const unreadCount = store.data.notifications.filter(n => !n.read).length;
    if (bellDot) {
      bellDot.style.display = unreadCount > 0 ? 'block' : 'none';
    }

    list.innerHTML = store.data.notifications.map(n => `
      <li class="pop__item ${n.read ? 'is-read' : 'is-unread'}">
        <span class="pop__dot"></span>
        <div class="pop__content">
          <p class="pop__text">${n.title}</p>
          <span class="pop__time">${n.time}</span>
        </div>
      </li>
    `).join('');
  }

  renderList();

  // Toggle popover
  bellBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = pop.classList.contains('is-open');
    if (isOpen) {
      pop.classList.remove('is-open');
      pop.hidden = true;
    } else {
      renderList();
      pop.hidden = false;
      requestAnimationFrame(() => pop.classList.add('is-open'));
    }
  });

  // Mark all read
  document.getElementById('read-all')?.addEventListener('click', () => {
    store.markAllNotificationsRead();
    renderList();
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!pop.contains(e.target) && e.target !== bellBtn && !bellBtn.contains(e.target)) {
      pop.classList.remove('is-open');
      pop.hidden = true;
    }
  });
}
