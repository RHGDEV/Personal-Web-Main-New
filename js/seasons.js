const backgrounds = {
    default: 'https://images.unsplash.com/photo-1631677209832-e9dd6aec3697',
    summer: [
        'https://images.unsplash.com/photo-1541843713287-e0d5de49a384',
        'https://images.unsplash.com/photo-1512848857248-75eff50a19a1',
        'https://images.unsplash.com/photo-1544513169-0a660c85bdd9'
    ],
    spring: [
        'https://images.unsplash.com/photo-1591194577912-2c7811d0f994',
        'https://images.unsplash.com/photo-1541942172213-60aeb3558797',
        'https://images.unsplash.com/photo-1597086454462-1f9b6e95e1f7'
    ],
    autumn: [
        'https://images.unsplash.com/photo-1507486411790-179bbb6866ed'
    ],
    winter: [
        'https://images.unsplash.com/photo-1515583484859-a15e976f80d2',
        'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22',
        'https://images.unsplash.com/photo-1456389573961-0ae56d45961e'
    ],
    // Special
    xmas: [
        'https://images.unsplash.com/photo-1539298781177-895e382e795c'
    ],
    nye: [
        'https://images.unsplash.com/photo-1514876246314-d9a231ea21db'
    ]
}
function getSeason() {
    //return 'default' // enforce default image
    //return 'winter' // enforce season image
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

function loadScript(scriptName) {
    $.getScript('/js/' + scriptName + '.js', function(data, textStatus, jqxhr) {
        //console.log(data); //data returned
        console.log(textStatus); //success
        //console.log(jqxhr.status); //200
        //console.log('Load was performed.');
   });
}
function addStyle(cssName) { $('head').append('<link rel="stylesheet" href="/css/' + cssName + '.css" type="text/css" />'); }
function setBackground(season) {
    let img = season.match('/http:\/\/www.example.com\/version.php/i') ? season : backgrounds[season][Math.floor(Math.random()*backgrounds[season].length)];
    img = img || backgrounds.default;
    img = img + '?ixlib=rb-1.2.1&auto=format&w=1920'// &q=180' // Downscale
    let elem = document.getElementById('background');
    elem.style.position = "fixed";
    elem.style.top = "-50%"
    elem.style.left = "-50%"
    elem.style.width = "200%"
    elem.style.height = "200%"
    elem.style.backgroundSize = "cover"
    elem.style.backgroundColor = "linear-gradient(5deg, rgba(0, 0, 0, 0.4)"
    elem.style.backgroundImage = "url('"+ img +"')";
    elem.style.backgroundRepeat = "no-repeat";
    elem.style.backgroundPosition = "center center";
    elem.style.backgroundAttachment = "fixed";
}

document.addEventListener('DOMContentLoaded', function() {
    let season = getSeason();
    //console.log(season)
    setBackground(season);
    if (season == 'spring') {
    } else if (season == 'summer') {
    } else if (season == 'autumn') {
    } else if (season == 'winter') {
        loadScript('snow');
        //let s = loadScript('snow');
        //s.targetElement = 'background-cover'
    // Special Cases
    } else if (season == 'xmas') {
        loadScript('snow');
    } else if (season == 'nye') {
        //loadScript('snow');
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
        document.getElementById('background-cover').appendChild(canvas);
        //document.body.appendChild(canvas);
        loadScript('fireworks');
    }
});