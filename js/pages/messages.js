/**
 * messages.js — Support Inbox & Messages Page Controller
 * Renders 2-pane split inbox with conversation switcher, live chat thread,
 * and quick reply composer.
 */

import { store } from '../store.js';
import { showToast } from '../sheets-modal.js';

let activeThreadId = 'm1';
let threadFilter = '';

export function renderMessages(container, params) {
  function render() {
    const threads = store.data.messages.filter(m =>
      !threadFilter ||
      m.name.toLowerCase().includes(threadFilter.toLowerCase()) ||
      m.subject.toLowerCase().includes(threadFilter.toLowerCase())
    );

    const activeThread = store.data.messages.find(m => m.id === activeThreadId) || threads[0] || store.data.messages[0];
    if (activeThread && activeThread.unread) {
      activeThread.unread = false;
    }

    container.innerHTML = `
      <div class="view-container">

        <div class="inbox-layout">

          <!-- Left Pane: Thread List -->
          <aside class="inbox-sidebar">
            <div class="inbox-sidebar__header">
              <span class="inbox-sidebar__title">Inbox (${threads.length})</span>
              <div class="view-search" style="width: 160px;">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input type="text" id="msg-search-input" placeholder="Search..." value="${threadFilter}" />
              </div>
            </div>

            <ul class="inbox-thread-list" role="listbox" aria-label="Conversation threads">
              ${threads.map(t => {
                const isActive = t.id === activeThread.id;
                return `
                  <li class="inbox-thread ${isActive ? 'is-active' : ''}" data-id="${t.id}" role="option">
                    <div class="inbox-thread__top">
                      <div style="display:flex; align-items:center; gap:6px;">
                        ${t.unread ? '<span class="unread-dot" style="width:6px;height:6px;background:#FF5722;border-radius:50%;display:inline-block;"></span>' : ''}
                        <b class="inbox-thread__name">${t.name}</b>
                      </div>
                      <span class="inbox-thread__time">${t.time}</span>
                    </div>
                    <div class="inbox-thread__subject">${t.subject}</div>
                    <div class="inbox-thread__preview text-muted" style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                      ${t.lastMsg}
                    </div>
                  </li>
                `;
              }).join('')}
            </ul>
          </aside>

          <!-- Right Pane: Active Chat Conversation -->
          <main class="inbox-main card" style="display:flex; flex-direction:column; padding:0; overflow:hidden;">

            <!-- Header -->
            <header class="inbox-main__header" style="padding: 16px 20px; border-bottom: 1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; background: var(--card-light-bg);">
              <div class="user-cell">
                <span class="user-cell__avatar">${activeThread.avatar}</span>
                <div>
                  <b style="font-size:14px;">${activeThread.name}</b>
                  <div class="text-muted" style="font-size:12px;">Subject: ${activeThread.subject}</div>
                </div>
              </div>
              <div>
                <a href="#/customers?id=${activeThread.customerId}" class="btn btn--outline btn--sm">View Customer</a>
              </div>
            </header>

            <!-- Message History Bubbles -->
            <div class="inbox-feed" id="inbox-feed" style="flex:1; padding: 20px; overflow-y:auto; display:flex; flex-direction:column; gap:16px;">
              ${activeThread.thread.map(msg => {
                const isAgent = msg.sender === 'agent';
                return `
                  <div class="chat-msg ${isAgent ? 'chat-msg--agent' : 'chat-msg--customer'}" style="display:flex; flex-direction:column; align-items: ${isAgent ? 'flex-end' : 'flex-start'};">
                    <div style="display:flex; align-items:baseline; gap:6px; margin-bottom:4px;">
                      <span class="text-muted" style="font-size:11px; font-weight:600;">${isAgent ? 'Support Team' : activeThread.name}</span>
                      <span class="text-muted" style="font-size:10px;">${msg.time}</span>
                    </div>
                    <div class="chat-bubble" style="
                      max-width: 80%;
                      padding: 12px 16px;
                      border-radius: 14px;
                      font-size: 13.5px;
                      line-height: 1.45;
                      ${isAgent
                        ? 'background: var(--nav-tab-active-bg); color: var(--nav-tab-active-text); border-bottom-right-radius: 2px;'
                        : 'background: var(--card-light-bg); color: var(--text-primary); border-bottom-left-radius: 2px; border: 1px solid var(--border-color);'
                      }
                    ">
                      ${msg.text}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Composer Reply Bar -->
            <div class="inbox-composer" style="padding: 16px 20px; border-top: 1px solid var(--border-color); background: var(--card-light-bg);">
              <form id="reply-form" style="display:flex; gap: 10px; align-items:flex-end;">
                <textarea
                  id="reply-input"
                  class="textarea"
                  rows="2"
                  placeholder="Type a reply... (Press Enter to send)"
                  style="flex:1; resize:none; padding:10px 14px; font-size:13px;"
                  required
                ></textarea>
                <button type="submit" class="btn btn--filled" style="height:40px; padding:0 20px; display:inline-flex; align-items:center; gap:6px;">
                  <span>Send</span>
                  <svg viewBox="0 0 24 24" style="width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2.5;"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </form>
            </div>

          </main>

        </div>

      </div>
    `;

    // Thread selection
    container.querySelectorAll('.inbox-thread').forEach(el => {
      el.addEventListener('click', () => {
        activeThreadId = el.dataset.id;
        render();
      });
    });

    // Search
    const searchInput = container.querySelector('#msg-search-input');
    searchInput?.addEventListener('input', (e) => {
      threadFilter = e.target.value;
      render();
      const updatedInput = container.querySelector('#msg-search-input');
      if (updatedInput) {
        updatedInput.focus();
        updatedInput.selectionStart = updatedInput.selectionEnd = updatedInput.value.length;
      }
    });

    // Reply submit
    const replyForm = container.querySelector('#reply-form');
    const replyInput = container.querySelector('#reply-input');

    replyInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        replyForm?.requestSubmit();
      }
    });

    replyForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = replyInput?.value.trim();
      if (!text) return;

      activeThread.thread.push({
        sender: 'agent',
        text,
        time: 'Just now'
      });
      activeThread.lastMsg = text;
      activeThread.time = 'Just now';

      showToast('Reply dispatched to customer', 'success');
      render();

      // Scroll to bottom of conversation
      setTimeout(() => {
        const feed = container.querySelector('#inbox-feed');
        if (feed) feed.scrollTop = feed.scrollHeight;
      }, 50);
    });

    // Initial scroll to bottom
    const feed = container.querySelector('#inbox-feed');
    if (feed) feed.scrollTop = feed.scrollHeight;
  }

  render();
}
