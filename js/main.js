'use strict';

// Run line template
const runline = document.querySelectorAll('.run-line');
const template = document.querySelector('#run-line');

runline.forEach((el) => {
	let contents = template.content.cloneNode(true);
	el.appendChild(contents);
});

// Stages slider
const prevStage = document.querySelector('.stages__prev');
const nextStage = document.querySelector('.stages__next');
const currentStage = document.querySelector('.stages__curr-count');
const stagesContent = document.querySelector('.stages__list');
const stagesCount = document.querySelector('.stages__page-count');
const stagesBtns = document.querySelectorAll('.stages__slide-btn');

let slideShift = 0;

function prevStageSlide() {
	if (slideShift <= 4 && slideShift != 0) {
		slideShift--;
		let n = slideShift * 100;
		stagesContent.style.transform = `translateX(-${n}%)`;
		// Active button style
		let stagesBtnActive = document.querySelector('.stages__slide-btn_active');
		stagesBtnActive.classList.remove('stages__slide-btn_active');
		let prevBtn = stagesBtnActive.previousElementSibling;
		if (prevBtn !== null) {
			stagesBtnActive.previousElementSibling.classList.add('stages__slide-btn_active');
		}
	}
}
prevStage.addEventListener('click', prevStageSlide);

function nextStageSlide() {
	if (slideShift <= 3) {
		slideShift++;
		let n = slideShift * 100;
		stagesContent.style.transform = `translateX(-${n}%)`;
		// Active button style
		let stagesBtnActive = document.querySelector('.stages__slide-btn_active');
		stagesBtnActive.classList.remove('stages__slide-btn_active');
		let nextBtn = stagesBtnActive.nextElementSibling;
		if (nextBtn !== null) {
			stagesBtnActive.nextElementSibling.classList.add('stages__slide-btn_active');
		}
	}
}
nextStage.addEventListener('click', nextStageSlide);

// Members slider
const prev = document.querySelector('.members__prev');
const next = document.querySelector('.members__next');
const currentCount = document.querySelector('.members__curr-count');
const sliderContent = document.querySelector('.members__content');

function resetSlides() {
	let winWidth = window.innerWidth;
	if (winWidth < 1366) {
		currentCount.textContent = '1';
	} else {
		currentCount.textContent = '3';
	}
}
window.addEventListener('resize', resetSlides);
resetSlides();

function prevSlide(n) {
	if (slideShift <= n && slideShift != 0) {
		slideShift--;
		let n = slideShift * 100;
		sliderContent.style.transform = `translateX(-${n}%)`;
		currentCount.textContent = slideShift + 1;
	}
}

function nextSlide(n) {
	if (slideShift <= n - 1) {
		slideShift++;
		let n = slideShift * 100;
		sliderContent.style.transform = `translateX(-${n}%)`;
		currentCount.textContent = slideShift + 1;
	}
}

function prevMembers() {
	let winWidth = window.innerWidth;
	// Slide numbers for mobile/desktop
	if (winWidth < 1366) {
		let n = 6;
		prevSlide(n);
	} else {
		let n = 2;
		prevSlide(n);
	}
}
prev.addEventListener('click', prevMembers);

function nextMembers() {
	let winWidth = window.innerWidth;
	// Slide numbers for mobile/desktop
	if (winWidth < 1366) {
		let n = 5;
		console.log(n);
		nextSlide(n);
	} else {
		let n = 1;
		console.log(n);
		nextSlide(n);
	}
}
next.addEventListener('click', nextMembers);
