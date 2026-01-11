/**
 * CoraTO | A server by the people, for the people
 * VERSION: 2.2.1-FINAL-SYNC
 */

// Version check for console debugging
window.APP_VERSION = "2.2.5";
console.log("CoraTO Tracker JS Loading - Version: " + window.APP_VERSION);

let done = JSON.parse(localStorage.getItem('cto_v22_done') || '{}');

const STAR_GAZER_LINK = 'https://wikimirror.lifeto.co/wiki.ggftw.com/trickster/Star_Gazing.html';
const MAJOR_CORA_LINK = 'https://mewsie.world/CoraTOWiki/index.php/Cora_Boxes#Major_Cora_Boxes';

let sortMode = 'location';

const LOCATION_CATEGORIES = [
    "Coral Beach", "Desert Beach", "Megalopolis", "Caballa Relics", "Oops Wharf",
    "Mirage", "Mermaid Palace", "Ghost Blue", "Rose Garden", "Black Swamp",
    "Underground Dev Room", "Snow Hill", "Techichi", "Tapasco", "Abyss"
];

function getQuestLocation(key, val) {
    const k = key.toLowerCase();
    const l = val.loc_img ? val.loc_img.toLowerCase() : "";
    if (k.includes("coral")) return "Coral Beach";
    if (k.includes("desert") || k.includes("paradise")) return "Desert Beach";
    if (k.includes("megalo")) return "Megalopolis";
    if (k.includes("caballa") || k.includes("azteca")) return "Caballa Relics";
    if (k.includes("oops")) return "Oops Wharf";
    if (k.includes("mermaid")) return "Mermaid Palace";
    if (k.includes("ghost blue") || k.includes("aquarius") || l.includes("ghostb")) return "Ghost Blue";
    if (k.includes("swamp") || l.includes("blacks")) return "Black Swamp";
    if (k.includes("rose") || l.includes("rose")) return "Rose Garden";
    if (k.includes("snow") || l.includes("snow")) return "Snow Hill";
    if (k.includes("techi")) return "Techichi";
    if (k.includes("tapasco")) return "Tapasco";
    if (k.includes("dev room")) return "Underground Dev Room";
    if (k.includes("abyss")) return "Abyss";
    if (k.includes("mirage")) return "Mirage";
    return "Other";
}

function init() {
    renderSidebar();
    // Default state: No quest selected
    const infoDiv = document.getElementById('view-info');
    if (infoDiv) infoDiv.innerHTML = '<div style="text-align:center; color:var(--text-dim);">Select a quest...</div>';

    const mapFrame = document.getElementById('map-frame');
    if (mapFrame) mapFrame.innerHTML = '<span class="no-content">Select a quest to view location</span>';

    const npcImgDiv = document.getElementById('npc-img-container');
    if (npcImgDiv) npcImgDiv.innerHTML = '<span class="no-content">No NPC Image</span>';

    updateStats();
}

function renderSidebar() {
    const container = document.getElementById('sidebar-lists-container');
    if (!container) return;
    container.innerHTML = '';

    if (sortMode === 'type') {
        const sections = [
            { id: 'list-normal', label: 'Normal Daily', data: typeof NORMAL_QUESTS !== 'undefined' ? NORMAL_QUESTS : {}, collapsed: false },
            { id: 'list-shadow-stella', label: 'Shadow Hunt (Stella)', data: typeof SHADOW_STELLA !== 'undefined' ? SHADOW_STELLA : {}, collapsed: true },
            { id: 'list-shadow-jia', label: 'Shadow MQ Hunt (Jia)', data: typeof SHADOW_JIA !== 'undefined' ? SHADOW_JIA : {}, collapsed: true },
            { id: 'list-grass', label: 'Grass Shard Daily (Monkey_T)', data: typeof GRASS_QUESTS !== 'undefined' ? GRASS_QUESTS : {}, collapsed: true }
        ];

        sections.forEach(s => {
            const label = document.createElement('div');
            label.className = `nav-label ${s.collapsed ? 'collapsed' : ''}`;
            label.innerText = s.label;
            const shell = document.createElement('div');
            shell.className = `nav-shell ${s.collapsed ? 'collapsed' : ''}`;
            const inner = document.createElement('div');
            inner.id = s.id;
            inner.className = 'nav-inner';
            shell.appendChild(inner);
            label.onclick = () => {
                label.classList.toggle('collapsed');
                shell.classList.toggle('collapsed');
            };
            container.appendChild(label);
            container.appendChild(shell);
            buildList(inner, s.data);
        });
    } else {
        const locGroups = {};
        LOCATION_CATEGORIES.forEach(loc => locGroups[loc] = []);
        locGroups["Other"] = [];
        const allSet = [];
        if (typeof NORMAL_QUESTS !== 'undefined') allSet.push(NORMAL_QUESTS);
        if (typeof SHADOW_STELLA !== 'undefined') allSet.push(SHADOW_STELLA);
        if (typeof SHADOW_JIA !== 'undefined') allSet.push(SHADOW_JIA);
        if (typeof GRASS_QUESTS !== 'undefined') allSet.push(GRASS_QUESTS);

        allSet.forEach(data => {
            for (const [key, val] of Object.entries(data)) {
                const loc = getQuestLocation(key, val);
                if (locGroups[loc]) locGroups[loc].push({ key, val });
                else locGroups["Other"].push({ key, val });
            }
        });

        LOCATION_CATEGORIES.concat(["Other"]).forEach((loc, idx) => {
            const qArr = locGroups[loc];
            if (!qArr || qArr.length === 0) return;
            const label = document.createElement('div');
            label.className = `nav-label ${idx > 0 ? 'collapsed' : ''}`;
            label.innerText = loc;
            const shell = document.createElement('div');
            shell.className = `nav-shell ${idx > 0 ? 'collapsed' : ''}`;
            const inner = document.createElement('div');
            inner.className = 'nav-inner';
            shell.appendChild(inner);
            label.onclick = () => {
                label.classList.toggle('collapsed');
                shell.classList.toggle('collapsed');
            };
            container.appendChild(label);
            container.appendChild(shell);
            qArr.forEach(q => inner.appendChild(createRow(q.key, q.val)));
        });
    }
}

function createRow(key, val) {
    const det = document.createElement('div');
    det.className = 'q-row';
    det.id = `row-${key.replace(/[^a-zA-Z0-9]/g, '')}`;
    const chkSpan = document.createElement('span');
    chkSpan.onclick = (e) => { e.stopPropagation(); window.toggleDone(key + "_" + val.q); };
    const chk = document.createElement('input');
    chk.type = "checkbox";
    chk.checked = !!done[key + "_" + val.q];
    chk.style.marginRight = "10px";
    chkSpan.appendChild(chk);
    const lbl = document.createElement('span');
    lbl.innerText = key;
    det.appendChild(chkSpan);
    det.appendChild(lbl);
    det.onclick = (e) => {
        document.querySelectorAll('.q-row').forEach(r => r.style.background = 'transparent');
        det.style.background = 'var(--bg-card)';
        if (e.target !== chk && e.target !== chkSpan) showDetails(key, val);
    };
    if (done[key + "_" + val.q]) det.classList.add('done');
    return det;
}

function buildList(cont, data) {
    if (!cont || !data) return;
    for (const [key, val] of Object.entries(data)) {
        cont.appendChild(createRow(key, val));
    }
}

// EXPLICIT GLOBAL FUNCTIONS
window.setSort = function (mode) {
    sortMode = mode;
    const bL = document.getElementById('btn-sort-loc');
    const bT = document.getElementById('btn-sort-type');
    if (bL) bL.classList.toggle('active', mode === 'location');
    if (bT) bT.classList.toggle('active', mode === 'type');
    renderSidebar();
};

window.toggleDone = function (id) {
    if (done[id]) delete done[id]; else done[id] = Math.floor(Math.random() * 100);
    localStorage.setItem('cto_v22_done', JSON.stringify(done));
    renderSidebar();
    updateStats(done[id] ? id : null);
};

window.toggleTheme = function () {
    const h = document.documentElement;
    h.setAttribute('data-theme', h.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
};

window.fullReset = function () {
    if (confirm("⚠️ This will wipe all your progress. Are you sure?")) {
        localStorage.clear();
        location.reload();
    }
};

function showDetails(key, val) {
    const mainGrid = document.querySelector('.content-grid');
    if (mainGrid) {
        mainGrid.classList.remove('animate-fade');
        void mainGrid.offsetWidth;
        mainGrid.classList.add('animate-fade');
    }
    const req = (val.req || "").replace("Star Gazer Questline", `<a href="${STAR_GAZER_LINK}" target="_blank" rel="noopener noreferrer" class="quest-link">Star Gazer Questline</a>`);
    const sReq = req + (req.includes("Mind's Eye") && typeof MINDS_EYE_ICON !== 'undefined' ? MINDS_EYE_ICON : "");
    const itemImg = val.r_img ? `<img src="${val.r_img.startsWith('img/') ? val.r_img : `img/items/${val.r_img}`}" class="item-icon" alt="${val.r}">` : "";
    const rew = (val.rewards || "").replace(/Major Cora Box/g, `<a href="${MAJOR_CORA_LINK}" target="_blank" rel="noopener noreferrer" class="quest-link">Major Cora Box</a>`);

    document.getElementById('view-info').innerHTML = `
        <h3 class="quest-title">${key}</h3>
        <div class="quest-meta">
            <div class="meta-item"><span class="meta-label">NPC:</span> <span class="meta-value">${val.q}</span></div>
            ${val.npc_loc ? `<div class="meta-item"><span class="meta-label">NPC Location:</span> <span class="meta-value" style="color: var(--accent); font-weight: 700;">${val.npc_loc}</span></div>` : ''}
            <div class="meta-item"><span class="meta-label">Req:</span> <span class="req-val">${sReq}</span></div>
        </div>
        <div class="quest-need"><span class="meta-label">Need:</span> <span class="need-content">${itemImg} <span class="need-text">${val.r}</span></span></div>
        <div class="quest-rewards"><span class="meta-label">Rewards:</span> <span class="rewards-text">${rew}</span></div>
    `;

    const mapFrame = document.getElementById('map-frame');
    if (mapFrame) {
        if (val.loc_img) mapFrame.innerHTML = `<img src="${val.loc_img}" class="map-img" alt="Location">`;
        else mapFrame.innerHTML = '<span class="no-content">No Map Image available.</span>';
    }

    const nC = document.getElementById('npc-img-container');
    if (nC) {
        if (val.npc_img) nC.innerHTML = `<img src="img/${val.npc_img}" class="npc-img" alt="${val.q}">`;
        else nC.innerHTML = '<span class="no-content">No NPC Image</span>';
    }
    renderBestiary(val.mobs);
}

function renderBestiary(mobs) {
    const grid = document.getElementById('view-best');
    if (!grid) return;
    if (!mobs || mobs.length === 0) { grid.innerHTML = '<div class="no-content">No monsters listed.</div>'; return; }
    if (!mobs.some(m => m.label)) {
        grid.innerHTML = mobs.map(m => `<div class="mob-card">${m.img ? `<img src="img/monsters/${m.img}" class="mob-img" alt="${m.n}">` : ''}<div class="mob-name">${m.n}</div><div class="mob-loc">${m.l}</div></div>`).join('');
        return;
    }
    let groups = []; let cur = { label: "Monsters", items: [] };
    mobs.forEach(m => { if (m.label) { if (cur.items.length > 0) groups.push(cur); cur = { label: m.label, items: [] }; } else cur.items.push(m); });
    if (cur.items.length > 0) groups.push(cur);
    grid.innerHTML = groups.map(g => `<div class="best-section"><div class="best-header" onclick="this.classList.toggle('collapsed'); this.nextElementSibling.classList.toggle('collapsed');">${g.label}</div><div class="best-shell"><div class="best-inner">${g.items.map(m => `<div class="mob-card">${m.img ? `<img src="img/monsters/${m.img}" class="mob-img" alt="${m.n}">` : ''}<div class="mob-name">${m.n}</div><div class="mob-loc">${m.l}</div></div>`).join('')}</div></div></div>`).join('');
}

function updateStats(triggerId = null) {
    let stats = { daily_coupon: 0, cora_coupon: 0, eggs: 0, galder: 0, star_tear: 0, gorgon: 0, charybdis: 0, scylla: 0, hecate: 0, chronos: 0, card_pack: 0, major_cora_box: 0 };
    let bkd = { normal: { done: 0, total: 0 }, stella: { done: 0, total: 0 }, jia: { done: 0, total: 0 }, grass: { done: 0, total: 0 } };
    let cC = 0, tC = 0, nS = false;
    const check = (map, cat) => {
        if (!map) return;
        for (const [key, val] of Object.entries(map)) {
            tC++; bkd[cat].total++; const id = key + "_" + val.q;
            if (done[id]) {
                cC++; bkd[cat].done++;
                if (val.math) {
                    let r = done[id]; if (typeof r === 'boolean') { r = Math.floor(Math.random() * 100); done[id] = r; nS = true; }
                    if (cat === 'normal') { stats.daily_coupon += (val.math.daily_coupon || 0); stats.galder += (val.math.galder || 0); stats.card_pack += (val.math.card_pack || 0); if (r < 75) stats.cora_coupon += 1; else stats.eggs += 3; }
                    else if (cat === 'jia') { if (r < 50) stats.major_cora_box += 1; else if (id === triggerId) triggerFail('count-major-cora'); }
                    else if (cat === 'grass') { if (r < 50) { ['gorgon', 'charybdis', 'scylla', 'hecate', 'chronos'].forEach(s => { if (val.math[s]) stats[s] += Math.round(val.math[s] * 2); }); } else stats.cora_coupon += 3; }
                    else if (cat === 'stella') stats.star_tear += (val.math.star_tear || 0);
                }
            }
        }
    };
    function triggerFail(id) { const el = document.getElementById(id); if (!el) return; el.classList.remove('shake-red'); void el.offsetWidth; el.classList.add('shake-red'); setTimeout(() => el.classList.remove('shake-red'), 600); }
    check(NORMAL_QUESTS, 'normal'); check(SHADOW_STELLA, 'stella'); check(SHADOW_JIA, 'jia'); check(GRASS_QUESTS, 'grass');
    if (nS) localStorage.setItem('cto_v22_done', JSON.stringify(done));
    const fmt = (n) => n % 1 !== 0 ? "~" + n.toFixed(1) : n;
    const fmtK = (n) => n >= 1000 ? (n / 1000).toFixed(0) + "k" : n;
    const anim = (id, val, f) => {
        const el = document.getElementById(id); if (!el) return;
        const nV = f(val).toString(); if (el.innerText === nV) return;
        const cV = parseFloat(el.innerText.replace(/[~k]/g, '')) || 0;
        const sV = (id === 'count-galder') ? (cV * 1000) : cV;
        const diff = val - sV; const dur = 400; const start = performance.now();
        el.classList.add('counter-pulse');
        const frame = (now) => {
            const prog = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - prog, 3);
            el.innerText = f(sV + (diff * ease));
            if (prog < 1) requestAnimationFrame(frame); else { el.innerText = f(val); el.classList.remove('counter-pulse'); }
        };
        requestAnimationFrame(frame);
    };
    anim('count-daily-cp', stats.daily_coupon, fmt); anim('count-cora-cp', stats.cora_coupon, fmt); anim('count-eggs', stats.eggs, fmt); anim('count-galder', stats.galder, fmtK); anim('count-tears', stats.star_tear, fmt);
    anim('count-gorgon', stats.gorgon, fmt); anim('count-chary', stats.charybdis, fmt); anim('count-scylla', stats.scylla, fmt); anim('count-hecate', stats.hecate, fmt); anim('count-chronos', stats.chronos, fmt);
    anim('count-card', stats.card_pack, fmt); anim('count-major-cora', stats.major_cora_box, fmt);
    ['normal', 'stella', 'jia', 'grass'].forEach(c => { const el = document.getElementById('bar-' + c); if (el && bkd[c].total > 0) el.style.width = (Math.round((bkd[c].done / bkd[c].total) * 100) || 0) + '%'; });
    const sS = (id, v) => { if (document.getElementById(id)) document.getElementById(id).innerText = v; };
    sS('prog-txt-total', `${cC}/${tC}`); sS('prog-normal', `${bkd.normal.done}/${bkd.normal.total}`); sS('prog-stella', `${bkd.stella.done}/${bkd.stella.total}`); sS('prog-jia', `${bkd.jia.done}/${bkd.jia.total}`); sS('prog-grass', `${bkd.grass.done}/${bkd.grass.total}`);
}

document.addEventListener('DOMContentLoaded', init);
