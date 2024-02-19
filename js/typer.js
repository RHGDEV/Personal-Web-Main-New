let typer, phrase, phraseNum = 0, phrases = [
	'A.A.S. Computer IT — Networking; 2023',
	'Microsoft Office Specialist — Excel 2016',
	'Eagle Scout — Class of 2020',
	'CCNA: Introduction to Networks; 2023',
	'CCNA: Switching, Routing, and Wireless Essentials; 2023',
	'Amateur Radio Operator — Technician',
	'Verified Discord Bot Developer; 2021',
];

phrase = () => {
	let curPhrase = phrases[phraseNum];
	typer = new TypeIt("#typer", {
		string: [],
		startDelete: true,
		speed: 75,
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
