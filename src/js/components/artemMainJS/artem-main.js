import $ from 'jquery';
import 'owl.carousel';

// Здесь буду писать весь JS
const testAddJS = () => {
  const text = 'Привет!';
  console.log(text);
}
testAddJS();

// Переключение вида представления для секции "YOUR SUITE TYPE"
const switchButtonViewType = () => {
  const buttonViewTypeCards = document.getElementsByClassName('buttonViewTypeCards')[0];
  const buttonViewTypeTable = document.getElementsByClassName('buttonViewTypeTable')[0];
  const suiteSection = document.getElementsByClassName('suites__container');
  const suitesTable = document.getElementsByClassName("suitesTable");
  const suitesNav = document.getElementsByClassName("suites__nav")[0];

  // Кнопка Cards
  buttonViewTypeCards.addEventListener("click", function () {
    buttonViewTypeTable.classList.remove('activeTypeView');
    buttonViewTypeCards.classList.add('activeTypeView');
    // Удалим класс обертку для показа представления в виде "Таблицы"
    for (let i = 0; i < suiteSection.length; i++) {
      suiteSection[i].classList.remove('selectedTableView');
    }

    // Скроем секцию представления в виде "Таблицы"
    for (let i = 0; i < suitesTable.length; i++) {
      suitesTable[i].classList.remove('active');
    }

    // Покажем блок "NUMBER OF GUESTS"
    suitesNav.classList.remove("hideSuitesNav");
  });

  // Кнопка Table
  buttonViewTypeTable.addEventListener("click", function () {
    buttonViewTypeCards.classList.remove('activeTypeView');
    buttonViewTypeTable.classList.add('activeTypeView');
    // Добавим класс обертку для показа представления в виде "Таблицы"
    for (let i = 0; i < suiteSection.length; i++) {
      suiteSection[i].classList.add('selectedTableView');
    }

    // Покажем секцию представления в виде "Таблицы"
    for (let i = 0; i < suitesTable.length; i++) {
      suitesTable[i].classList.add('active');
    }

    // Скроем блок "NUMBER OF GUESTS"
    suitesNav.classList.add("hideSuitesNav");
  });
}
switchButtonViewType();

// Инициализация слайдеров (для работы слайдеров раздела "YOUR SUITE TYPE")
const initCaruselsSectionSuitesTable = () => {
  // Слайдеры
  const owlCarousel = document.getElementsByClassName("owl-carousel");
  // Модальное окно которое показываем по клику на слайд рядом с таблицей раздела "YOUR SUITE TYPE"
  const modalSliderSuites = document.getElementById("modalSliderSuites").getElementsByTagName("img");

  // Инициализация всех слайдеров у которых класс "owl-carousel"
  $(".owl-one").owlCarousel({
    autoplay: true,
    rewind: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  $(".owl-two").owlCarousel({
    autoplay: true,
    rewind: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  $(".owl-three").owlCarousel({
    autoplay: true,
    rewind: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  // Слайдер с превью
  $(document).ready(function(){
    $('.owl-four').owlCarousel({
      items: 1,
      slideSpeed: 2000,
      autoplay: true,
      thumbs: true,
      thumbImage: true,
      thumbContainerClass: 'owl-thumbs',
      thumbItemClass: 'owl-thumb-item',
      dots: false,
      nav: false,
    });
  });

  // При клике на слайд - подменяем изображения в слайдере который в модальном окне
  // Это нужно для показа в модальном окне слайдера с более большими изображениями 
  for (let a = 0; a < owlCarousel.length; a++) {
    // Клик по слайдеру
    owlCarousel[a].addEventListener("click", function () {
      // Получим все изображения слайдера по которому кликнули
      const images = owlCarousel[a].getElementsByTagName("img");

      for (let b = 0; b < images.length; b++) {
        // Во всех тегах img -> подменим изображения на такие же как в маленьком слайде
        modalSliderSuites[b].setAttribute("src", images[b].getAttribute("src"))
      }
    });
  }
  
}

initCaruselsSectionSuitesTable();

