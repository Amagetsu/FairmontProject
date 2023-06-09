// Лоадер 

const loader = document.querySelector('.loader');

let loaderStage1;
let loaderStage2;	

function setLoader () {

	document.body.style.overflow = "hidden";
	loaderStage1 = setInterval(loaderStage1Close, 5000);

} setLoader()

function loaderStage1Close () {
	loader.classList.add('opa')
	loaderStage2 = setInterval(loaderStage2Close, 1000);
	
}

function loaderStage2Close () {
	loader.classList.add('hide')	
	document.body.style.overflow = "";
	clearInterval(loaderStage1)
	clearInterval(loaderStage2)
}

// ----

// Бургер меню

const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__body')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

// ----

// Анимация скрола при нажатии на ссылку

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})

// ----

// Смена картинок на баннере

const banner = document.querySelector('.baner'),
	  timerId = setInterval(changeBG, 10000);
let timerIterator = 0;

function changeBG(){
	if (banner?.style.backgroundImage === undefined){
		clearInterval(timerId)
		return
	} else if (timerIterator >= 3){
		timerIterator = 1
	} else{
		timerIterator++
	}
	banner.style.backgroundImage = `url(img/baner/${timerIterator}.png)`
	
}


// ----

// Модельное меню 

const modalTrigger = document.querySelector('[data-modal]'),
	  modal = document.querySelector('.modal-wrapper'),
	  modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.addEventListener('click', () => {

	modal.classList.add('show');
	modal.classList.remove('hide');
	document.body.style.overflow = "hidden";

});

modalCloseBtn.addEventListener('click', () => {

	modal.classList.add('hide');
	modal.classList.remove('show');
	document.body.style.overflow = "";

});

// ----

// Функция копирования IP

const copyBtn = document.querySelector('[data-copy-serverIP]'), 
	  copyWarning = document.querySelector('[data-copy-warning]');

let timerCopyWarning;

copyBtn.addEventListener('click',() => {
	navigator.clipboard.writeText('31.42.72.132:7777')
	copyWarning.classList.add('show')
	copyWarning.classList.remove('hide')
	timerCopyWarning = setInterval(copyWarningRemove, 2000)
})

function copyWarningRemove ()  {
	clearInterval(timerCopyWarning)
	copyWarning.classList.remove('show')
	copyWarning.classList.add('hide')
}

// ----