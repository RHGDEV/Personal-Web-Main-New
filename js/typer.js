let typer, phrase, phrases = [
		'Knowledge is Power',
		'Microsoft Office Specialist — Excel 2016',
		'Verified Discord Bot Developer — 2021',
		'Scouts BSA, Eagle Scout — Class of 2020',
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
