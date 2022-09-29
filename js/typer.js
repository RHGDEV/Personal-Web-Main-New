let typer, phrase, phrases = [
		//'Keep moving, theres nothing much to see.',
		//'"Computer go brrr"',
		//'You found another lazy website.',
		'Microsoft Office Specialist — Excel 2016',
		'Verified Discord Bot Developer; 2021',
		'Eagle Scout — Class of 2020',
		'"Look on every exit as being an entrance somewhere else."',
	],
	phraseNum = 0;

phrase = () => {
	let curPhrase = phrases[phraseNum];
	typer = new TypeIt("#typer", {
		string: [],
		startDelete: true,
		speed: 100,
		waitUntilVisible: true,
		afterComplete: (i) => {
			i.destroy();
			phrase();
		}
	})
	.type(curPhrase)
	.pause(5000)
	.delete(curPhrase.length)
	.pause(500)
	.go();
	phraseNum++;
	if (phraseNum == phrases.length) phraseNum = 0;
}
phrase();
