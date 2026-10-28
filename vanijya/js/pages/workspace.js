/**
 * workspace.js — Kanban Project Workspace Page Controller
 * Renders multi-board switcher, progress ring, 3-column Kanban board,
 * task movement between columns, and task detail sheet.
 */

import { store } from '../store.js';
import { openSheet, closeSheet, showToast } from '../sheets-modal.js';

let activeBoardId = 'b1';

export function renderWorkspace(container) {
  function render() {
    const board = store.data.boards.find(b => b.id === activeBoardId) || store.data.boards[0];
    const totalCards = board.columns.reduce((acc, col) => acc + col.tasks.length, 0);
    const doneCards = board.columns.find(col => (col.title || col.name || col.id || '').toLowerCase().includes('done'))?.tasks.length || 0;
    const progressPct = totalCards ? Math.round((doneCards / totalCards) * 100) : 0;

    container.innerHTML = `
      <div class="view-container">

        <!-- Board Head Card with Progress Ring -->
        <section class="card ws-head" style="padding: 24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap: 20px;">
          <div>
            <div style="display:flex; align-items:center; gap: 12px; margin-bottom: 8px;">
              <select class="select" id="ws-board-select" style="font-weight:700; font-size:18px; width:auto; border-radius:8px;">
                ${store.data.boards.map(b => `
                  <option value="${b.id}" ${b.id === board.id ? 'selected' : ''}>${b.name}</option>
                `).join('')}
              </select>
              <span class="badge badge--neutral">${totalCards} tasks</span>
            </div>
            <p class="text-muted" style="margin: 0; font-size: 13px;">
              ${board.desc}
            </p>
          </div>

          <!-- Progress Ring SVG -->
          <div style="display:flex; align-items:center; gap: 16px;">
            <div class="ws-ring" style="width: 54px; height: 54px; position:relative;">
              <svg viewBox="0 0 64 64" style="width:100%; height:100%; transform: rotate(-90deg);">
                <circle cx="32" cy="32" r="27" fill="none" stroke="var(--border-color)" stroke-width="6"/>
                <circle cx="32" cy="32" r="27" fill="none" stroke="#22C55E" stroke-width="6"
                  stroke-dasharray="169.6"
                  stroke-dashoffset="${169.6 - (169.6 * (progressPct / 100))}"
                  stroke-linecap="round"
                  style="transition: stroke-dashoffset 600ms ease;"
                />
              </svg>
              <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:12px;">
                ${progressPct}%
              </div>
            </div>
            <div>
              <b style="font-size: 14px;">${doneCards} completed</b>
              <div class="text-muted" style="font-size: 11px;">${totalCards - doneCards} remaining</div>
            </div>
          </div>
        </section>

        <!-- Kanban Columns -->
        <div class="ws-board-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 16px; align-items:flex-start;">
          ${board.columns.map(col => `
            <div class="ws-col card" style="padding: 16px; background: var(--bg-page); border: 1px solid var(--border-color); display:flex; flex-direction:column; gap: 12px;" data-col-id="${col.id}">

              <!-- Column Header -->
              <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom: 8px; border-bottom: 1px solid var(--border-color);">
                <div style="display:flex; align-items:center; gap: 8px;">
                  <b style="font-size: 14px;">${col.name || col.title}</b>
                  <span class="badge badge--neutral" style="font-size:11px;">${col.tasks.length}</span>
                </div>
                <button class="btn btn--outline btn--sm ws-add-card-btn" data-col="${col.id}">+</button>
              </div>

              <!-- Task Cards List -->
              <div class="ws-col-cards" style="display:flex; flex-direction:column; gap: 10px;">
                ${col.tasks.length === 0 ? `
                  <div style="padding: 24px 12px; text-align:center; font-size:12px; color:var(--text-muted); border: 2px dashed var(--border-color); border-radius: 8px;">
                    No tasks in this lane
                  </div>
                ` : col.tasks.map(task => {
                  const checkDone = task.done ?? task.checkDone ?? 0;
                  const checkTotal = task.total ?? task.checkTotal ?? 3;
                  const assignee = task.assignee || task.who || 'MR';
                  const dueDate = task.due || 'Nov 12';

                  return `
                    <article class="ws-card card" data-task-id="${task.id}" data-col="${col.id}" style="padding: 14px; background: var(--card-light-bg); border-radius: 12px; cursor: pointer; transition: transform var(--transition-fast);">
                      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 8px;">
                        <span class="badge badge--${task.tag === 'Launch' ? 'danger' : task.tag === 'Design' ? 'success' : 'neutral'}" style="font-size:10px;">
                          ${task.tag}
                        </span>
                        <!-- Advance task arrow -->
                        <button class="ws-move-btn" data-task="${task.id}" data-col="${col.id}" title="Move to next stage" style="background:none; border:none; cursor:pointer; color:var(--text-muted); padding:2px;">
                          <svg viewBox="0 0 24 24" style="width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2.5;"><polyline points="9 18 15 12 9 6"/></svg>
                        </button>
                      </div>

                      <b style="font-size: 13.5px; line-height: 1.4; display:block; margin-bottom: 6px;">
                        ${task.title}
                      </b>

                      <div style="display:flex; justify-content:space-between; align-items:center; font-size: 11.5px; color: var(--text-muted); margin-top: 10px;">
                        <span>Checklist: <b>${checkDone}/${checkTotal}</b></span>
                        <div class="user-cell" style="gap:4px;">
                          <span class="user-cell__avatar" style="width:22px; height:22px; font-size:9px;">${assignee}</span>
                          <span>${dueDate}</span>
                        </div>
                      </div>
                    </article>
                  `;
                }).join('')}
              </div>

            </div>
          `).join('')}
        </div>

      </div>
    `;

    // Board selector
    container.querySelector('#ws-board-select')?.addEventListener('change', (e) => {
      activeBoardId = e.target.value;
      render();
    });

    // Move task button
    container.querySelectorAll('.ws-move-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const taskId = btn.dataset.task;
        const colId = btn.dataset.col;
        advanceTask(board, colId, taskId);
        render();
      });
    });

    // Task card clicks
    container.querySelectorAll('.ws-card').forEach(card => {
      card.addEventListener('click', () => {
        const taskId = card.dataset.taskId;
        const colId = card.dataset.col;
        const col = board.columns.find(c => c.id === colId);
        const task = col?.tasks.find(t => t.id === taskId);
        if (task) showTaskSheet(task, col, board, render);
      });
    });

    // Add card button
    container.querySelectorAll('.ws-add-card-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const colId = btn.dataset.col;
        const col = board.columns.find(c => c.id === colId);
        if (col) {
          const newTask = {
            id: 't' + Date.now(),
            title: 'New Workspace Task',
            tag: 'Task',
            who: 'MR',
            due: 'Next week',
            checkTotal: 3,
            checkDone: 0
          };
          col.tasks.unshift(newTask);
          showToast(`Task added to ${col.name}`, 'success');
          render();
        }
      });
    });
  }

  render();
}

function advanceTask(board, fromColId, taskId) {
  const colOrder = ['todo', 'inprogress', 'done'];
  const currentIdx = colOrder.indexOf(fromColId);
  const nextColId = colOrder[(currentIdx + 1) % colOrder.length];

  const fromCol = board.columns.find(c => c.id === fromColId);
  const toCol = board.columns.find(c => c.id === nextColId);

  const taskIdx = fromCol.tasks.findIndex(t => t.id === taskId);
  if (taskIdx !== -1) {
    const [task] = fromCol.tasks.splice(taskIdx, 1);
    if (nextColId === 'done') task.checkDone = task.checkTotal;
    toCol.tasks.unshift(task);
    showToast(`Task moved to ${toCol.name}!`, 'info');
  }
}

function showTaskSheet(task, col, board, onUpdate) {
  openSheet({
    title: task.title,
    subtitle: `${board.name} · Lane: ${col.name}`,
    body: `
      <div class="sheet-section">
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size:13px;">
          <div>
            <span class="text-muted">Assignee</span>
            <div style="display:flex; align-items:center; gap:6px; margin-top:4px;">
              <span class="user-cell__avatar" style="width:24px; height:24px; font-size:10px;">${task.who}</span>
              <b>Team Member (${task.who})</b>
            </div>
          </div>
          <div>
            <span class="text-muted">Due Date</span>
            <div style="font-weight:700; margin-top:4px;">${task.due}</div>
          </div>
        </div>
      </div>

      <!-- Checklist Section -->
      <div class="sheet-section">
        <h3 class="sheet-heading">Checklist (${task.checkDone}/${task.checkTotal})</h3>
        <div style="display:flex; flex-direction:column; gap: 8px; font-size: 13px;">
          <label style="display:flex; align-items:center; gap: 10px;">
            <input type="checkbox" checked /> Review design specifications
          </label>
          <label style="display:flex; align-items:center; gap: 10px;">
            <input type="checkbox" ${task.checkDone >= 2 ? 'checked' : ''} /> Run quality assurance testing
          </label>
          <label style="display:flex; align-items:center; gap: 10px;">
            <input type="checkbox" ${task.checkDone >= 3 ? 'checked' : ''} /> Signoff from product lead
          </label>
        </div>
      </div>

      <!-- Activity Feed -->
      <div class="sheet-section">
        <h3 class="sheet-heading">Recent Activity</h3>
        <div class="text-muted" style="font-size: 12.5px; line-height: 1.5;">
          • Task created for upcoming product milestone<br>
          • Assignee set to <b>${task.who}</b>
        </div>
      </div>
    `,
    footer: `
      <button class="btn btn--outline" id="ws-sheet-close">Close</button>
      <button class="btn btn--filled" id="ws-advance-btn">Advance Stage →</button>
    `
  });

  setTimeout(() => {
    document.getElementById('ws-sheet-close')?.addEventListener('click', closeSheet);
    document.getElementById('ws-advance-btn')?.addEventListener('click', () => {
      advanceTask(board, col.id, task.id);
      closeSheet();
      onUpdate();
    });
  }, 50);
}
