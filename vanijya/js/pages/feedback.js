/**
 * feedback.js — Feedback & Feature Requests Page Controller
 * Renders interactive 5-star rating, submission form with character counter,
 * feedback history, and public requests upvote board.
 */

import { store } from '../store.js';
import { showToast } from '../sheets-modal.js';

let currentRating = 5;

export function renderFeedback(container) {
  function render() {
    const feedbackList = store.data.feedbackList || store.data.feedback || [];

    container.innerHTML = `
      <div class="view-container">

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items:flex-start;">

          <!-- Left Column: Share Feedback Form -->
          <section class="card fb-card" style="padding: 24px;">
            <h2 class="card__title" style="margin: 0 0 6px 0;">Share feedback</h2>
            <p class="text-muted" style="margin: 0 0 20px 0; font-size: 13px;">
              Help us shape the future of Sarthak Dashboard. We review every note personally.
            </p>

            <form id="fb-form" style="display:flex; flex-direction:column; gap: 16px;">

              <!-- Star Rating -->
              <div class="field">
                <label class="label">Overall Experience</label>
                <div class="fb-stars" id="fb-stars" style="display:flex; gap: 8px; cursor:pointer;">
                  ${[1, 2, 3, 4, 5].map(star => `
                    <button type="button" class="star-btn" data-star="${star}" style="background:none; border:none; padding:0; cursor:pointer; font-size:24px; color: ${star <= currentRating ? '#FFB800' : 'rgba(0,0,0,0.15)'};">
                      ★
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- Category -->
              <div class="field">
                <label class="label" for="fb-cat">Feedback Topic</label>
                <select class="select" id="fb-cat">
                  <option value="Feature request">Feature request</option>
                  <option value="Usability">Design &amp; Usability</option>
                  <option value="Bug report">Bug report</option>
                  <option value="General praise">General praise</option>
                </select>
              </div>

              <!-- Message with Character Counter -->
              <div class="field">
                <div style="display:flex; justify-content:space-between; margin-bottom: 4px;">
                  <label class="label" for="fb-msg" style="margin:0;">Your Message</label>
                  <span class="text-muted" id="fb-count" style="font-size:11px;">0 / 500</span>
                </div>
                <textarea class="textarea" id="fb-msg" rows="4" maxlength="500" placeholder="Tell us what you'd change, what went wrong, or what you love..." required></textarea>
              </div>

              <button type="submit" class="btn btn--filled" style="align-self:flex-start;">
                Send Feedback
              </button>

            </form>
          </section>

          <!-- Right Column: Top Requests & History -->
          <div style="display:flex; flex-direction:column; gap: 16px;">

            <!-- Community Requests Board with Upvotes -->
            <section class="card fb-reqs" style="padding: 24px;">
              <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom: 16px;">
                <h3 class="card__title" style="margin: 0;">Top Community Requests</h3>
                <span class="text-muted" style="font-size:12px;">Vote for next features</span>
              </div>

              <div class="fb-list" style="display:flex; flex-direction:column; gap: 10px;">
                ${feedbackList.map(item => `
                  <div class="fb-item card" style="padding: 12px 14px; background: var(--bg-page); border: 1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
                    <div style="flex:1; padding-right:12px;">
                      <b style="font-size: 13.5px;">${item.title}</b>
                      <div style="display:flex; align-items:center; gap:8px; margin-top:4px;">
                        <span class="badge badge--${item.status === 'Planned' ? 'success' : item.status === 'In Review' ? 'warning' : 'neutral'}" style="font-size:10px;">
                          ${item.status}
                        </span>
                        <span class="text-muted" style="font-size:11px;">${item.category}</span>
                      </div>
                    </div>

                    <!-- Upvote Button -->
                    <button class="btn btn--outline btn--sm fb-upvote-btn" data-id="${item.id}" style="display:flex; align-items:center; gap:4px; font-weight:700;">
                      <span>▲</span>
                      <span class="upvote-count">${item.votes ?? item.upvotes ?? 0}</span>
                    </button>
                  </div>
                `).join('')}
              </div>
            </section>

          </div>

        </div>

      </div>
    `;

    // Star rating buttons
    container.querySelectorAll('.star-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentRating = parseInt(btn.dataset.star, 10);
        render();
      });
    });

    // Character counter
    const msgInput = container.querySelector('#fb-msg');
    const countEl = container.querySelector('#fb-count');
    msgInput?.addEventListener('input', () => {
      if (countEl) countEl.textContent = `${msgInput.value.length} / 500`;
    });

    // Form submit
    container.querySelector('#fb-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = msgInput?.value.trim();
      const cat = container.querySelector('#fb-cat')?.value;
      if (!text) return;

      store.addFeedback({
        title: text.slice(0, 50) + (text.length > 50 ? '...' : ''),
        category: cat,
        status: 'Under Review'
      });

      showToast('Thank you! Your feedback has been received.', 'success');
      render();
    });

    // Upvote buttons
    container.querySelectorAll('.fb-upvote-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const item = feedbackList.find(f => f.id === id);
        if (item) {
          store.upvoteFeedback(id);
          showToast(`Upvoted "${item.title}"!`, 'success');
          render();
        }
      });
    });
  }

  render();
}
