import $ from 'jquery';
import 'owl.carousel';
import { IMAGES_SLIDER_SUITES_TYPE } from '../../consts';

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

// Раздел "YOUR SUITE TYPE"
const sectionSuites = () => {
  // Слайдеры
  const owlCarousel = document.getElementsByClassName("owl-carousel");
  // Модальное окно которое показываем по клику на слайд рядом с таблицей раздела "YOUR SUITE TYPE"
  const modalSliderSuites = document.getElementById("modalSliderSuites").getElementsByTagName("img");

  // Модальное окно которое показываем по клику на ссылку Read more
  const modalSliderSuiteDescription = document.getElementById("modalSliderSuiteDescription");
  const suitesDescriptionTextLink = document.getElementsByClassName("suitesDescriptionTextLink");

  // Инициализация всех слайдеров у которых класс "owl-carousel"
  for (let i = 0; i < owlCarousel.length; i++) {
    const isOwlStandart = owlCarousel[i].matches('.owl-standart'); // Проверка на класс чтобы настройки для слайдеров с таким классом были одинаковые
    if (isOwlStandart) {

      // Слайдер с небольшими изображениями в разделе "YOUR SUITE TYPE" (рядом с таблицей)
      // Динамически исходя из переданного массива создаем слайды
      IMAGES_SLIDER_SUITES_TYPE?.map((item, index) => {
        $(owlCarousel[i]).append(`
          <div class="item owlCarouselItem">
            <button type="button" class="" data-bs-toggle="modal" data-bs-target="#modalSliderSuites">
              <img src=${item} class="d-block w-100"/>
            </button>
          </div>
        `);
      })

      $(owlCarousel[i]).owlCarousel({
        autoplay: false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: false,
        lazyLoad: true,
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
    }
  };

  // Слайдер с превью
  $(document).ready(function(){
    $('.owl-block-read-more').owlCarousel({
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

      // Во всех тегах img -> подменим изображения на такие же как в маленьком слайде
      for (let b = 0; b < images.length; b++) {
        modalSliderSuites[b].setAttribute("src", images[b].getAttribute("src"));
      }
    });
  };

  // При клике на "Read more"
  for (let i = 0; i < suitesDescriptionTextLink.length; i++) {
    suitesDescriptionTextLink[i].addEventListener("click", function () {
      // Изображения "маленького" слайдера
      const imagesCarousel = document.getElementsByClassName("owl-carousel-suitesTable")[i].getElementsByTagName("img");
      // Изображения в модальном окне
      const imagesInModal = modalSliderSuiteDescription.getElementsByTagName("img");

      // Подменим изображения в слайдере на изображения взятые с "маленького" слайдера
      for (let a = 0; a < imagesCarousel.length; a++) {
        imagesInModal[a].setAttribute("src", imagesCarousel[a].getAttribute("src"));

        // Подменим изображения для превью
        const previewsButtons = document.getElementsByClassName("owl-block-read-more")[0].getElementsByTagName("button");
        for (let z = 0; z < previewsButtons.length; z++) {
          previewsButtons[z].getElementsByTagName("img")[0]?.setAttribute("src", imagesCarousel[a].getAttribute("src"));
        }
      }

      // Блок с кратким описанием
      const suitesShortDesctiptionItem = document.getElementsByClassName("suitesShortDesctiptionItem");
      // Получим разметку блока с кратким описанием
      const htmlBlockInShortDescription = suitesShortDesctiptionItem[i].innerHTML;

      // Блок с описанием в модальном окне (по клику на "Read more")
      const modalItemSutesDescription = document.getElementsByClassName("modalItemSutesDescription")[0];
      // Подменим разметку в данном блоке
      modalItemSutesDescription.innerHTML = htmlBlockInShortDescription;
    });
  };

  // Выбор фильтра в разделе "EXTRA SERVICES"
  const extraServicesFiltersButtons = document.getElementsByClassName("extraServicesFilterButton");
   const clearActives =(classlist) => {
    if (classlist) {
      for (let i = 0; i < classlist.length; i++) {
        classlist[i].classList.remove('active');
      }
    }
  };

  for (let i = 0; i < extraServicesFiltersButtons.length; i++) {
    extraServicesFiltersButtons[i].addEventListener("click", function () {
      if (!this.classList.contains('active')) {
        clearActives(extraServicesFiltersButtons);
        this.classList.toggle('active');
        console.log("selected filter: ", this.getAttribute("data-value"))
      }
    });
  };

  // При клике на изображение "EXTRA SERVICES" (вид сервиса)
  const extraServicesItemImgWrapper = document.getElementsByClassName("extraServicesItemImgWrapper");
  const extraServicesModalSlider = document.getElementById("extraServicesModalSlider");

  for (let i = 0; i < extraServicesItemImgWrapper.length; i++) {
    extraServicesItemImgWrapper[i].addEventListener("click", function () {
      // Изображения
      const images = extraServicesItemImgWrapper[i].getElementsByTagName("img");
      // Изображения в модальном окне
      const imagesInModal = extraServicesModalSlider.getElementsByTagName("img");

      // Подменим изображения в слайдере на изображения взятые с блока "EXTRA SERVICES"
      for (let a = 0; a < images.length; a++) {
        imagesInModal[a].setAttribute("src", images[a].getAttribute("src"));
      }
    });
  };

  // Клик на "Details" в "EXTRA SERVICES"
  const extraServicesItemDescriptionLink = document.getElementsByClassName("extraServicesItemDescriptionLink");
  const extraServicesModalDetailed = document.getElementById("extraServicesModalDetailed");
  const extraServicesItem = document.getElementsByClassName("extraServicesItem");
  const extraServicesModalDetailedDescriptions = document.getElementsByClassName("extraServicesModalDetailedDescriptions")[0];

  for (let i = 0; i < extraServicesItemDescriptionLink.length; i++) {
    extraServicesItemDescriptionLink[i].addEventListener("click", function () {
      // Изображения
      const images = extraServicesItemImgWrapper[i].getElementsByTagName("img");
      // Изображения в модальном окне
      const imagesInModal = extraServicesModalDetailed.getElementsByTagName("img");

      // Подменим изображения в слайдере на изображения взятые с блока "EXTRA SERVICES"
      for (let a = 0; a < images.length; a++) {
        imagesInModal[a].setAttribute("src", images[a].getAttribute("src"));
      }

      // Получим разметку блока с кратким описанием
      const extraServicesItemHTML = extraServicesItem[i].innerHTML;
      // Подменим разметку в данном блоке
      extraServicesModalDetailedDescriptions.innerHTML = extraServicesItemHTML;

    });
  };

}
sectionSuites();

