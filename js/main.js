const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

let tarifModalSwp = new Swiper('.tarif-modal .swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    initialSlide: 1,
    speed: 600,
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 2,
        modifier: 10,
    },
    lazy: {
        loadPrevNext: true,
    },
    on: {
        transitionStart: function() {
            window.requestAnimationFrame(() => {
                tarifModalSwp.update();
            });
        },
    },
    breakpoints: {
        576: {
            spaceBetween: 50,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 5,
                modifier: 25
            },
        }
    }
})

const modals = document.querySelectorAll('.modal');

if (modals.length) {
    modals.forEach(el => {
        let bg = el.querySelector('.modal__bg'),
            closeBtn = el.querySelector('.modal__close');

        bg.onclick = () => {
            el.classList.remove('active');
            bodyVisible();
        }
        
        if (closeBtn) {
            closeBtn.onclick = () => {
                el.classList.remove('active');
                bodyVisible();
            }
        }
    })
}

let modalClasses = ['.mall-modal', '.great-modal', '.booking-modal', '.identify-modal', '.more-modal', '.purchase-modal'];
modalClasses.forEach(cls => {
    let modal = document.querySelector(cls);
    let btns = document.querySelectorAll(cls + '__open');
    if (btns.length) {
        btns.forEach(btn => {
            btn.onclick = e => {
                e.preventDefault();
                modal.classList.add('active');
                bodyHidden();
            }
        })
    }
})

let selects = document.querySelector('.select');

if (selects) {
    const btn = selects.querySelector('.select_btn');
    const text = selects.querySelector('.select_btn span');
    const list = selects.querySelectorAll('.select_list li');

    btn.onclick = () => {
        selects.classList.toggle('active');
    }

    list.forEach((a, idx) => {
        
        a.onclick = () => {
            list.forEach(b => {
                if (a == b) {
                    text.textContent = b.querySelector('span').textContent;
                    b.classList.add('selected');
                } else {
                    b.classList.remove('selected');
                }
            })
            selects.classList.remove('active');
        }
    })
}

let mallModal = document.querySelector('.mall-modal');
let mallModalBtns = document.querySelectorAll('.mall-modal .btns button');

if (mallModalBtns.length) {
    mallModalBtns.forEach((btn, btnID) => {
        btn.onclick = () => {
            mallModal.classList.remove('active');
            bodyVisible();
        }
    })
}

const examples = document.querySelectorAll('.example__card');

if (examples.length) {
    examples.forEach(el => {
        const swp = new Swiper(el.querySelector('.swiper'), {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            effect: 'fade',
            navigation: {
                nextEl: el.querySelector('.swp_btn__next'),
                prevEl: el.querySelector('.swp_btn__prev'),
            }
        })
    })
}

let reviewSwp = new Swiper('.review .swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    initialSlide: 1,
    loop: true,
    navigation: {
        nextEl: '.review .swp_btn__next',
        prevEl: '.review .swp_btn__prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: -1,
        depth: 10,
        modifier: 25
    },
    breakpoints: {
        1300: {
            spaceBetween: 90,
            effect: 'slide',
            slidesPerView: 3,
            initialSlide: 0,
        },
        1100: {
            slidesPerView: 3,
            effect: 'slide',
            initialSlide: 0,
        }
    }
})


var init = false;
var mallSwp;
function swiperMallCard() {
    if (window.innerWidth > 576) {
        if (!init) {
            init = true;
            mallSwp = new Swiper('.mall .swiper', {
                slidesPerView: 1,
                spaceBetween: 350,
                breakpoints: {
                    1100: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    }
                },
                navigation: {
                    nextEl: '.mall .swp_btn__next',
                    prevEl: '.mall .swp_btn__prev',
                }
            })
        }
    } else if (init) {
        mallSwp.destroy();
        init = false;
    }
}

if (document.querySelector('.mall .swiper')) {
    swiperMallCard();
}

window.addEventListener("resize", function () {
    if (document.querySelector('.mall .swiper')) {
        swiperMallCard();
    }
});

let header = document.querySelector('.header');
let bars = document.querySelector('.header__bars');

bars.onclick = () => {
    header.classList.toggle('active')
}

let accordions = document.querySelectorAll('.accordion__item');
if (accordions.length) {
    accordions.forEach(el => {
        const btn = el.querySelector('.accordion__btn');
        btn.onclick = () => {
            el.classList.toggle('active');

            accordions.forEach(a => {
                if (a != el) {
                    a.classList.remove('active')
                }
            })
        }
    })
}

let tarifSwp = new Swiper('.tarif .swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    initialSlide: 1,
    navigation: {
        nextEl: '.tarif .swp_btn__next',
        prevEl: '.tarif .swp_btn__prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: -1,
        depth: 10,
        modifier: 25
    },
    breakpoints: {
        1100: {
            initialSlide: 0,
            effect: "fade",
            spaceBetween: 0,
        }
    }
})

let texts = document.querySelectorAll('.example__card_content')
if (texts.length) {
    texts.forEach(el => {
        let text = el.querySelectorAll('.text div');
        let btn = el.querySelector('.navigation_btn');

        if (btn) {
            btn.onclick = () => {
                text.forEach(t => {
                    t.classList.toggle('active');
                });
                btn.classList.toggle('active');
            }
        }
    })
}

const callModal = document.querySelector('.call-modal');

document.querySelectorAll('ul a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === 'tel:+79774776999') {
            e.preventDefault();
            callModal.classList.add('active');
        }
    });
});


document.addEventListener('click', (e) => {
    if (selects) {
        const isClickedInsideDiv = e.composedPath().includes(selects)
        if (!isClickedInsideDiv) {
            selects.classList.remove('active');
        }
    }
})



const eventsLink = document.getElementById('events-link');
const eventsModal = document.getElementById('events-modal');
const modalCloseBtn = eventsModal.querySelector('.modal__close');
const modalBg = eventsModal.querySelector('.modal__bg');


eventsLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    eventsModal.classList.add('active');  
});


modalCloseBtn.addEventListener('click', () => {
    eventsModal.classList.remove('active');
});

modalBg.addEventListener('click', () => {
    eventsModal.classList.remove('active');
});

const detailsLinks = document.querySelectorAll('.details-link');  // Получаем все элементы с классом "details-link"
const detailsModal = document.getElementById('details-modal');
const detailsModalCloseBtn = detailsModal.querySelector('.modal__close');
const detailsModalBg = detailsModal.querySelector('.modal__bg');

// Проходим по всем ссылкам "подробней"
detailsLinks.forEach(detailsLink => {
    detailsLink.addEventListener('click', (e) => {
        e.preventDefault();  // Отменяем переход по ссылке
        detailsModal.classList.add('active');  // Открываем модальное окно
    });
});

// Закрытие модального окна при клике на кнопку "Закрыть" или фон
detailsModalCloseBtn.addEventListener('click', () => {
    detailsModal.classList.remove('active');
});

detailsModalBg.addEventListener('click', () => {
    detailsModal.classList.remove('active');
});

