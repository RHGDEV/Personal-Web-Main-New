var cbTime = -1;
window.statusInterval = setInterval(function() {
	cbTime = cbTime - 1;
	document.querySelector(
		'#statusUpdate'
	).innerText = `Next update: ${cbTime} second${cbTime == 0 ? '' : 's'}`;
	if (cbTime == 0) {
		fetchStatus();
	}
}, 1000);

function generate(check) {
	var down = ``;
	if (check.down) {
		down = `<br>
        Down for: <b>${timeToString(check.down_since)}</b><br>Error code: <b>${
			check.error
		}</b>`;
	}
	return `
    <a class="regular statuslink" href="https://stats.uptimerobot.com/Y5QPzcL3Yp/${check.monitorId}">
    <i class="${check.statusClass == 'success' ? 'upfacolor' : 'downfacolor'} fas fa-thumbs-${check.statusClass == 'success' ? 'up' : 'down'} fa-fw"></i> ${check.name} (${check.weeklyRatio.ratio}%)<br>
    </a>`;
}
var gotStatus = false;

async function fetchStatus() {
	document.querySelector('#statuscontainer').style.filter =
		'blur(2px) brightness(30%)';
	try {
		var statusFetch = await fetch(
			'https://cors-anywhere.herokuapp.com/https://stats.uptimerobot.com/api/getMonitorList/Y5QPzcL3Yp'
		);
		var status = await statusFetch.json();
		var string = `<h3 class="device-text mono italic">Last downtime: ${
			status.statistics.latest_downtime
		}</h3><h3 class="device-text mono italic" id="statusUpdate">Next update: 60 seconds</h3>`;
		for (var check of status.psp.monitors) { string += generate(check); }
		string += '<br>'
		document.querySelector('#statuscontainer').innerHTML = string;
		document.querySelector('#statuscontainer').style.filter = '';
		cbTime = 60;
	} catch (e) {
		console.error(e);
		cbTime = 5;
	}
}
fetchStatus();
