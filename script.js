for (var link of document.querySelectorAll('.extern')) {
	link.onmousedown = function() {
		document.body.style.opacity = '0';
		document.body.style.background = `rgb(${link.dataset.background})`;
		location.replace(link.href);
	};
}
for (var link of document.querySelectorAll('.intern')) {
	link.onmousedown = function() {
		document.body.style.opacity = '0';
		document.body.style.background = `rgb(${link.dataset.background})`;
		location.replace(link.href);
	};
}