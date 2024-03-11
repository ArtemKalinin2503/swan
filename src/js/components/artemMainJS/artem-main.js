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

// Инициализация слайдеров (так как разметка будет динамическая приходиться по средством данной функции проставлять необходимые id и атрибуты)
// для работы слайдеров
const initCarusels = () => {
  // Найдем все слайдеры
  const carusels = document.getElementsByClassName("carousel");

  // Зададим каждому слайдеру id (у каждого слайдера id обязателен)
  for (let i = 0; i < carusels.length; i++) {
    carusels[i].setAttribute("id", `${"carouselExampleIndicators" + i}`);
    // Получим id каждого слайдера
    const carouselId = carusels[i]?.getAttribute("id");
    // Получим у каждого слайдера кнопки
    const buttons = document.getElementById(carouselId).getElementsByTagName("button");

    // Присвоем каждой кнопке в слайдере в атрибут "data-bs-target" - значением id слайдера (так должно быть согласно документации)
    for (let a = 0; a < buttons.length; a++) {
      buttons[a].setAttribute("data-bs-target", `${"#" + carouselId}`);
    }
  }

}
initCarusels();