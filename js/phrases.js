let phraseNum = 0;
function phrase() {
	let localPhrases = [
		'Keep moving, theres nothing much to see.',
		'"Look on every exit as being an entrance somewhere else."',
		'"Your JavaScript Guy"',
		'"Every now and then, break something"',
		'What are you waiting for, find a vulnerability here.',
		'The backdoors have been found.',
		'You found another lazy website.',
	];
	$('#phrasespos').fadeOut(1000, function() {
		$('#phrasespos').text(localPhrases[phraseNum]);
		$('#phrasespos').fadeIn(1000);
	});
	phraseNum++;
	if (phraseNum == localPhrases.length) phraseNum = 0;
}

phrase();
setInterval(function() {
	phrase();
}, 13000);
