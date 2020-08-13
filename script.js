const reviews = [
	{
		id: 1,
		name: 'Foued Kamel',
		job: '<a href = "https://avionav.net/" target ="_blank">Avionav</a> CEO',
		img: 'images/foued.jfif',
		text: 'Sedki is smart and driven, and I highly recommand working with him'
	},
	{
		id: 2,
		name: 'Wajdi Zorgui',
		job: 'PLC Developer',
		img: 'images/wajdi.jpg',
		text:
			'Working with Sedki is both fun and inspiring, he loves programming and he understands computers at a fundamental level, and that makes him in my opinion one of the best web developers out there.'
	},
	{
		id: 3,
		name: 'Darina Bohashova',
		job: 'Business Owner',
		img: 'images/darina.jpg',
		text: 'If I need a wep page for one of my properties, I just call Sedki. He always exceeds my expectation!'
	},
	{
		id: 4,
		name: 'Sofien Ghali',
		job: 'UX designer',
		img: 'images/soufien.jpg',
		text: 'Great designs, great talent, clean code! I highly recommand.'
	}
];
const img = document.getElementById('img-person');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('informs');
const prevbtn = document.getElementById('prevbtn');
const nextbtn = document.getElementById('nextbtn');
const home = document.getElementById('home');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
	showCustomer();
});

function showCustomer() {
	const item = reviews[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	job.innerHTML = item.job;
	info.textContent = item.text;
}
prevbtn.addEventListener('click', function() {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showCustomer();
});
nextbtn.addEventListener('click', function() {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showCustomer();
});
