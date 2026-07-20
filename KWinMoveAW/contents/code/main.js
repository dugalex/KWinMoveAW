const defaults = [
    { x: 600,  y: 9,   width: 1920, height: 1108 }, // 0
    { x: 9,    y: 9,   width: 1008, height: 595  }, // 1
    { x: 9,    y: 614, width: 1008, height: 765  }, // 2
    { x: 9,    y: 9,   width: 1008, height: 1370 }, // 3
    { x: 1027, y: 9,   width: 1493, height: 595  }, // 4
    { x: 1027, y: 614, width: 1493, height: 765  }, // 5
    { x: 1027, y: 9,   width: 1493, height: 1370 }, // 6
    { x: 2530, y: 9,   width: 525,  height: 595  }, // 7
    { x: 2530, y: 614, width: 525,  height: 765  }, // 8
    { x: 2530, y: 9,   width: 525,  height: 1370 }  // 9
];

function getGeom(index) {
    const fallback = defaults[index];
    if (!fallback) return { x: 0, y: 0, width: 0, height: 0 };

    const configStr = readConfig("geom" + index, "");
    if (!configStr || !configStr.trim()) return fallback;

    const parts = configStr.split(",").map(s => Number(s.trim()));
    if (parts.length !== 4) return fallback;
    if (!parts.every(Number.isFinite)) return fallback;

    const [x, y, w, h] = parts.map(n => Math.trunc(n));

    if (w <= 0 || h <= 0) return fallback;

    return { x, y, width: w, height: h };
}

function isBlacklisted(win) {
    if (!win.resourceClass) return false;

    const configStr = readConfig("blacklist", "");
    if (!configStr || !configStr.trim()) return false;

    const blacklist = configStr.split(",").map(s => s.trim().toLowerCase()).filter(Boolean);
    const winClass = win.resourceClass.toString().toLowerCase();

    return blacklist.some(item => winClass.includes(item));
}

function moveaw(index) {
    return function () {
        const win = workspace.activeWindow;
        if (!win || !win.moveable || !win.resizeable) return;
        if (win.fullScreen || win.fullscreen) return;
        if (isBlacklisted(win)) return;
        win.frameGeometry = getGeom(index);
    };
}

for (let i = 0; i < 10; i++) {
    registerShortcut(`KWinMoveAW${i}`, `KWinMoveAW Position ${i}`, `Meta+Num+${i}`, moveaw(i));
}
