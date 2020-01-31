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
