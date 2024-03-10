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
  const suitesTable = document.getElementsByClassName("suitesTable")[0];
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
    suitesTable.classList.remove('active');

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
    suitesTable.classList.add('active');

    // Скроем блок "NUMBER OF GUESTS"
    suitesNav.classList.add("hideSuitesNav");
  });
}
switchButtonViewType();