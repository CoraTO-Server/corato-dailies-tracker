/**
 * CoraTO | A server by the people, for the people
 * Made for cora-to.com Trickster Online
 * Credits: Admin Spooki and GM Mewsie
 * "Vibecoded" - Free to use & reverse engineer.
 */

let done = JSON.parse(localStorage.getItem('cto_v22_done') || '{}');

const STAR_GAZER_LINK = 'https://wikimirror.lifeto.co/wiki.ggftw.com/trickster/Star_Gazing.html';
const MAJOR_CORA_LINK = 'https://mewsie.world/CoraTOWiki/index.php/Cora_Boxes#Major_Cora_Boxes';

function init() {
    buildList('list-normal', NORMAL_QUESTS);
    buildList('list-shadow-stella', SHADOW_STELLA);
    buildList('list-shadow-jia', SHADOW_JIA);
    buildList('list-grass', GRASS_QUESTS);

    const firstKey = Object.keys(NORMAL_QUESTS)[0];
    showDetails(firstKey, NORMAL_QUESTS[firstKey]);

    updateStats();
}

function buildList(el, data) {
    const cont = document.getElementById(el);
    for (const [key, val] of Object.entries(data)) {
        const det = document.createElement('div');
        det.className = 'q-row';
        det.id = `row-${key.replace(/[^a-zA-Z0-9]/g, '')}`;

        const chkSpan = document.createElement('span');
        chkSpan.onclick = (e) => {
            e.stopPropagation();
            toggleDone(key + "_" + val.q);
        };
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
            if (e.target !== chk && e.target !== chkSpan) {
                showDetails(key, val);
            }
        }

        if (done[key + "_" + val.q]) det.classList.add('done');
        cont.appendChild(det);
    }
}

function toggleDone(id) {
    const wasDone = !!done[id];
    if (wasDone) {
        delete done[id];
    } else {
        done[id] = Math.floor(Math.random() * 100);
    }

    localStorage.setItem('cto_v22_done', JSON.stringify(done));

    document.getElementById('list-normal').innerHTML = '';
    document.getElementById('list-shadow-stella').innerHTML = '';
    document.getElementById('list-shadow-jia').innerHTML = '';
    document.getElementById('list-grass').innerHTML = '';

    buildList('list-normal', NORMAL_QUESTS);
    buildList('list-shadow-stella', SHADOW_STELLA);
    buildList('list-shadow-jia', SHADOW_JIA);
    buildList('list-grass', GRASS_QUESTS);

    updateStats(!wasDone ? id : null);
}

function showDetails(key, val) {
    const mainGrid = document.querySelector('.content-grid');
    if (mainGrid) {
        mainGrid.classList.remove('animate-fade');
        void mainGrid.offsetWidth;
        mainGrid.classList.add('animate-fade');
    }

    let reqHtml = val.req;
    if (reqHtml.includes("Star Gazer Questline")) {
        reqHtml = reqHtml.replace(
            "Star Gazer Questline",
            `<a href="${STAR_GAZER_LINK}" target="_blank" rel="noopener noreferrer" class="quest-link">Star Gazer Questline</a>`
        );
    }
    if (val.req.includes("Mind's Eye")) reqHtml += MINDS_EYE_ICON;

    let itemImgHtml = "";
    if (val.r_img) {
        const fullPath = val.r_img.startsWith('img/') ? val.r_img : `img/items/${val.r_img}`;
        itemImgHtml = `<img src="${fullPath}" class="item-icon" alt="${val.r}">`;
    }

    let rewardsHtml = val.rewards;
    if (rewardsHtml.includes("Major Cora Box")) {
        rewardsHtml = rewardsHtml.replace(
            /Major Cora Box/g,
            `<a href="${MAJOR_CORA_LINK}" target="_blank" rel="noopener noreferrer" class="quest-link">Major Cora Box</a>`
        );
    }

    const infoDiv = document.getElementById('view-info');
    infoDiv.innerHTML = `
        <h3 class="quest-title">${key}</h3>
        <div class="quest-meta">
            <div class="meta-item"><span class="meta-label">NPC:</span> <span class="meta-value">${val.q}</span></div>
            <div class="meta-item"><span class="meta-label">Req:</span> <span class="req-val">${reqHtml}</span></div>
        </div>
        <div class="quest-need">
             <span class="meta-label">Need:</span> 
             <span class="need-content">${itemImgHtml} <span class="need-text">${val.r}</span></span>
        </div>
        <div class="quest-rewards">
            <span class="meta-label">Rewards:</span> <span class="rewards-text">${rewardsHtml}</span>
        </div>
    `;

    document.getElementById('location-img').src = val.loc_img || "https://wiki.ragnatales.com.br/images/5/52/Trickster_World_Map.png";

    const npcImgDiv = document.getElementById('npc-img-container');
    if (val.npc_img) npcImgDiv.innerHTML = `<img src="img/${val.npc_img}" class="npc-img" alt="${val.q}">`;
    else npcImgDiv.innerHTML = '<span class="no-content">No NPC Image</span>';

    renderBestiary(val.mobs);
}

function renderBestiary(mobs) {
    const grid = document.getElementById('view-best');
    if (!mobs || mobs.length === 0) {
        grid.innerHTML = '<div class="no-content">No monsters listed.</div>';
        return;
    }
    const hasHeaders = mobs.some(m => m.label);
    if (!hasHeaders) {
        grid.innerHTML = mobs.map(m => `
            <div class="mob-card">
                ${m.img ? `<img src="img/monsters/${m.img}" class="mob-img" alt="${m.n}">` : ''}
                <div class="mob-name">${m.n}</div>
                <div class="mob-loc">${m.l}</div>
            </div>
        `).join('');
        return;
    }
    let groups = [];
    let currentGroup = { label: "Monsters", items: [] };
    mobs.forEach(m => {
        if (m.label) {
            if (currentGroup.items.length > 0) groups.push(currentGroup);
            currentGroup = { label: m.label, items: [] };
        } else currentGroup.items.push(m);
    });
    if (currentGroup.items.length > 0) groups.push(currentGroup);

    grid.innerHTML = groups.map(g => {
        const itemsHtml = g.items.map(m => `
            <div class="mob-card">
                ${m.img ? `<img src="img/monsters/${m.img}" class="mob-img" alt="${m.n}">` : ''}
                <div class="mob-name">${m.n}</div>
                <div class="mob-loc">${m.l}</div>
            </div>
        `).join('');
        return `
        <div class="best-section">
            <div class="best-header" onclick="this.classList.toggle('collapsed'); this.nextElementSibling.classList.toggle('collapsed');">${g.label}</div>
            <div class="best-shell"><div class="best-inner">${itemsHtml}</div></div>
        </div>
        `;
    }).join('');
}

function updateStats(triggerId = null) {
    let stats = {
        daily_coupon: 0, cora_coupon: 0, eggs: 0, galder: 0, star_tear: 0,
        gorgon: 0, charybdis: 0, scylla: 0, hecate: 0, chronos: 0,
        card_pack: 0, major_cora_box: 0
    };
    let breakdown = {
        normal: { done: 0, total: 0 }, stella: { done: 0, total: 0 },
        jia: { done: 0, total: 0 }, grass: { done: 0, total: 0 }
    };
    let completedCount = 0;
    let totalCount = 0;
    let needsSave = false;

    const runCheck = (map, catKey) => {
        for (const [key, val] of Object.entries(map)) {
            totalCount++;
            breakdown[catKey].total++;
            const id = key + "_" + val.q;
            if (done[id]) {
                completedCount++;
                breakdown[catKey].done++;
                if (val.math) {
                    let roll = done[id];
                    if (typeof roll === 'boolean') {
                        roll = Math.floor(Math.random() * 100);
                        done[id] = roll;
                        needsSave = true;
                    }
                    if (catKey === 'normal') {
                        stats.daily_coupon += (val.math.daily_coupon || 0);
                        stats.galder += (val.math.galder || 0);
                        stats.card_pack += (val.math.card_pack || 0);
                        if (roll < 75) stats.cora_coupon += 1; else stats.eggs += 3;
                    }
                    else if (catKey === 'jia') {
                        if (roll < 50) stats.major_cora_box += 1;
                        else if (id === triggerId) triggerFailedRollEffect('count-major-cora');
                    }
                    else if (catKey === 'grass') {
                        if (roll < 50) {
                            ['gorgon', 'charybdis', 'scylla', 'hecate', 'chronos'].forEach(s => {
                                if (val.math[s]) stats[s] += Math.round(val.math[s] * 2);
                            });
                        } else stats.cora_coupon += 3;
                    }
                    else if (catKey === 'stella') stats.star_tear += (val.math.star_tear || 0);
                }
            }
        }
    }

    function triggerFailedRollEffect(elementId) {
        const el = document.getElementById(elementId);
        if (!el) return;
        el.classList.remove('shake-red');
        void el.offsetWidth;
        el.classList.add('shake-red');
        setTimeout(() => el.classList.remove('shake-red'), 600);
    }

    runCheck(NORMAL_QUESTS, 'normal');
    runCheck(SHADOW_STELLA, 'stella');
    runCheck(SHADOW_JIA, 'jia');
    runCheck(GRASS_QUESTS, 'grass');

    if (needsSave) localStorage.setItem('cto_v22_done', JSON.stringify(done));

    const fmt = (n) => n % 1 !== 0 ? "~" + n.toFixed(1) : n;
    const fmtK = (n) => n >= 1000 ? (n / 1000).toFixed(0) + "k" : n;

    const animateValue = (id, newValue, formatter) => {
        const el = document.getElementById(id);
        if (!el) return;

        // BIG FIX: Compare formatted strings to see if the value ACTUALLY changed visually
        // This prevents the Galder pulse from "k" rounding errors or unnecessary updates.
        const newFormattedValue = formatter(newValue).toString();
        if (el.innerText === newFormattedValue) return;

        const currentText = el.innerText.replace(/[~k]/g, '');
        const currentValue = parseFloat(currentText) || 0;

        // Use raw value for math, but we only proceed if strings differ
        const targetValue = newValue;
        const duration = 400;
        const startTime = performance.now();
        const startRawValue = (id === 'count-galder') ? (currentValue * 1000) : currentValue;
        const difference = targetValue - startRawValue;

        el.classList.add('counter-pulse');

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = startRawValue + (difference * easeOut);
            el.innerText = formatter(current);
            if (progress < 1) requestAnimationFrame(animate);
            else {
                el.innerText = formatter(targetValue);
                el.classList.remove('counter-pulse');
            }
        };
        requestAnimationFrame(animate);
    };

    animateValue('count-daily-cp', stats.daily_coupon, fmt);
    animateValue('count-cora-cp', stats.cora_coupon, fmt);
    animateValue('count-eggs', stats.eggs, fmt);
    animateValue('count-galder', stats.galder, fmtK);
    animateValue('count-tears', stats.star_tear, fmt);
    animateValue('count-gorgon', stats.gorgon, fmt);
    animateValue('count-chary', stats.charybdis, fmt);
    animateValue('count-scylla', stats.scylla, fmt);
    animateValue('count-hecate', stats.hecate, fmt);
    animateValue('count-chronos', stats.chronos, fmt);
    animateValue('count-card', stats.card_pack, fmt);
    animateValue('count-major-cora', stats.major_cora_box, fmt);

    const setBar = (id, cat) => {
        const el = document.getElementById(id);
        if (el && breakdown[cat].total > 0) {
            el.style.width = (Math.round((breakdown[cat].done / breakdown[cat].total) * 100) || 0) + '%';
        }
    };
    setBar('bar-normal', 'normal');
    setBar('bar-stella', 'stella');
    setBar('bar-jia', 'jia');
    setBar('bar-grass', 'grass');

    const safeSet = (id, v) => { if (document.getElementById(id)) document.getElementById(id).innerText = v; };
    safeSet('prog-txt-total', `${completedCount}/${totalCount}`);
    safeSet('prog-normal', `${breakdown.normal.done}/${breakdown.normal.total}`);
    safeSet('prog-stella', `${breakdown.stella.done}/${breakdown.stella.total}`);
    safeSet('prog-jia', `${breakdown.jia.done}/${breakdown.jia.total}`);
    safeSet('prog-grass', `${breakdown.grass.done}/${breakdown.grass.total}`);
}

function toggleTheme() {
    const h = document.documentElement;
    h.setAttribute('data-theme', h.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}

function fullReset() {
    if (confirm("⚠️ This will wipe all your progress. Are you sure?")) {
        localStorage.clear();
        location.reload();
    }
}

window.onload = init;
