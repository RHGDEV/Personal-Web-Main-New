const backgrounds = {
    default: '1631677209832-e9dd6aec3697',
    summer: [
        '1541843713287-e0d5de49a384',
        '1512848857248-75eff50a19a1',
        '1544513169-0a660c85bdd9'
    ],
    spring: [
        '1591194577912-2c7811d0f994',
        '1541942172213-60aeb3558797',
        '1597086454462-1f9b6e95e1f7'
    ],
    autumn: [
        '1507486411790-179bbb6866ed',
        '1550931937-2dfd45a40da0',
        '1508766229-1a45d4127740'
    ],
    winter: [
        '1515583484859-a15e976f80d2',
        '1483921020237-2ff51e8e4b22',
        '1456389573961-0ae56d45961e'
    ],
    //? Special
    xmas: [
        '1539298781177-895e382e795c'
    ],
    nye: [
        '1514876246314-d9a231ea21db'
    ]
}
function getSeason() {
    //return 'default' //? enforce default image
    //return 'winter' //? enforce season image
    date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let seasons = ['spring','summer','autumn','winter'];
    console.log(month, day)
    if (month == 3 && month == 4 || month == 5) return 'spring';
    else if (month == 6 || month == 7 || month == 8) return 'summer';
    else if (month == 9 || month == 10 || month == 11) return 'autumn';
    else if (month == 12 || month == 1 || month == 2) {
        if (month == 12 && day >= 25) return 'xmas';
        if (month == 1 && day >= 1) return 'nye';
        return 'winter'
    }
    return seasons[Math.floor((month % 12) / 3)];
}

async function loadScript(scriptName) {
    return new Promise((resolve, reject) => {
        var script = document.createElement("script");
        script.type = 'text/javascript';
        script.async = true;
        script.src = '/js/' + scriptName + '.js';
        document.head.appendChild(script);
        script.addEventListener('load', () => resolve(script))
        script.addEventListener('error', () => reject(new Error(`${scriptName} failed to load.`)))
    })
}
function addStyle(cssName) { $('head').append('<link rel="stylesheet" href="/css/' + cssName + '.css" type="text/css" />'); }
function setBackground(season) {
    let imgId = backgrounds[season] ? backgrounds[season][Math.floor(Math.random()*backgrounds[season].length)] : backgrounds.default;
    imgId = imgId || backgrounds.default;
    imgId = 'https://images.unsplash.com/photo-' + imgId + '?ixlib=rb-1.2.1&auto=format&h=1080'//? Format //! &q=180' //? Downscale
    let elem = document.getElementById('background');
    elem.style.position = "fixed";
    elem.style.top = "-50%"
    elem.style.left = "-50%"
    elem.style.width = "200%"
    elem.style.height = "200%"
    elem.style.backgroundSize = "cover"
    elem.style.backgroundColor = "linear-gradient(5deg, rgba(0, 0, 0, 0.4)"
    elem.style.backgroundImage = "url('"+ imgId +"')";
    elem.style.backgroundRepeat = "no-repeat";
    elem.style.backgroundPosition = "center center";
    elem.style.backgroundAttachment = "fixed";
}

//document.addEventListener('DOMContentLoaded', async function() {
$(document).ready(async function() {
    const urlParams = new URLSearchParams(window.location.search);
    let season = urlParams.get('season') || getSeason();
    loadScript('comeback');
    setBackground(season);
    if (season == 'spring') {
    } else if (season == 'summer') {
    } else if (season == 'autumn') {
    } else if (season == 'winter') {
        await loadScript('snow');
        snowStorm.toggleSnow();
    //? Special Cases
    } else if (season == 'xmas') {
        await loadScript('snow');
        snowStorm.toggleSnow();
    } else if (season == 'nye') {
        var canvas = document.createElement("canvas");
        canvas.id = "canvas";
        canvas.style.cursor = "crosshair"
        canvas.style.position = "fixed";
        canvas.style.margin = "0";
	    canvas.style.width = "100%";
	    canvas.style.height = "100%";
	    canvas.style.left = "0";
	    canvas.style.top = "0";
        canvas.style.display = "block";
        canvas.style.zIndex = 10
        document.getElementById('background-cover').appendChild(canvas); //? Append to background-cover.
        //?document.body.appendChild(canvas); // Append to body
        await loadScript('fireworks');
    } else {

    }
});