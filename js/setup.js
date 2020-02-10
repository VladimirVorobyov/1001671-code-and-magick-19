'use strict';
var NICKNAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLORS_MANTLE = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COLOR_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_MAGICIAN = 4;
var usersDialog = document.querySelector('.setup');
var charactersDialog = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

/* функция для рандомного создания фамилии и имени */
var getUserName = function (name, givenName) {
  var randomName = name[Math.floor(Math.random() * name.length)];
  var randomFio = givenName[Math.floor(Math.random() * givenName.length)];
  return randomName + ' ' + randomFio;
};

/* функция получения рандомного цвета мантии и глаз */
var getCoatEyesColors = function (array) {
  var randomMantleEyes = array[Math.floor(Math.random() * array.length)];
  return randomMantleEyes;
};

usersDialog.classList.remove('hidden');

charactersDialog.classList.remove('hidden');

/* отрисовка всех магов в фрагмент, потом добавление */
var drawingMagicians = function () {
  for (var i = 0; i < NUMBER_MAGICIAN; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = getUserName(NICKNAMES, SURNAMES);
    wizardElement.querySelector('.wizard-coat').style.fill = getCoatEyesColors(COLORS_MANTLE);
    wizardElement.querySelector('.wizard-eyes').style.fill = getCoatEyesColors(COLOR_EYES);
    fragment.appendChild(wizardElement);
  }
  return similarListElement.appendChild(fragment);
};

drawingMagicians();

var closeDialog = usersDialog.querySelector('.setup-close');
var onCloseDialogClick = function () {
  usersDialog.classList.add('hidden');
};

// закрытие по клику
closeDialog.addEventListener('click', onCloseDialogClick);
// закрыте по кнопке
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    onCloseDialogClick();
  }
});
// закрыть по enter
closeDialog.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    onCloseDialogClick();
  }
});

// открытие по клику
var usersDialogAvatar = document.querySelector('.setup-open');

var onUsersDialogAvatarClick = function () {
  usersDialog.classList.remove('hidden');
};

usersDialogAvatar.addEventListener('click', onUsersDialogAvatarClick);
// открытие по кнопке
var userDialogImg = usersDialogAvatar.querySelector('.setup-open-icon');
userDialogImg.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    onUsersDialogAvatarClick();
  }
});
// валидация имени игрока
var setupUserName = usersDialog.querySelector('.setup-user-name');
var onUserNameInvalid = function () {
  if (setupUserName.validity.valueMissing) {
    setupUserName.setCustomValidity('Обязательное поле');
  } else if (setupUserName.validity.tooShort) {
    setupUserName.setCustomValidity('имя персонажа не может содержать менее 2 символов');
  } else if (setupUserName.validity.tooLong) {
    setupUserName.setCustomValidity('максимальная длина имени персонажа — 25 символов');
  } else {
    setupUserName.setCustomValidity('');
  }
};

setupUserName.addEventListener('invalid', onUserNameInvalid);


// изменение мантии
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var coatInputs = document.querySelector('input[name="coat-color"]');
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getCoatEyesColors(COLORS_MANTLE);
  coatInputs.value = wizardCoat.style.fill;
});

// цвет глаз
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var eyesInputs = document.querySelector('input[name="eyes-color"]');
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getCoatEyesColors(COLOR_EYES);
  eyesInputs.value = wizardEyes.style.fill;
});

// цвет огня
var COLARS_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var fireballWrap = document.querySelector('.setup-fireball-wrap');
var fireballInputs = document.querySelector('input[name="fireball-color"]');
fireballWrap.addEventListener('click', function () {
  fireballWrap.style.background = getCoatEyesColors(COLARS_FIREBALL);
  fireballInputs.value = fireballWrap.style.background;
});
// не пойму почему все работает а форма пишет ошибкуюю
