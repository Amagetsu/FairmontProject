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
	console.log(banner?.style.backgroundImage);
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

const modalTrigger = document.querySelectorAll('[data-modal]'),
	  modal = document.querySelector('.lol'),
	  modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.addEventListener('click', () => {

	modal.classList.add('show');
	modal.classList.remove('hide');

});

modalTrigger.addEventListener('click', () => {

	modal.classList.add('hide');
	modal.classList.remove('show');

});

// ----