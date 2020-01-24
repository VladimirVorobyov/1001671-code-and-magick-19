'use strict';
// этот код работает в современном режиме
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var NAME_Y = 270;
var BAR_HEIGHT = 150;
var DISTANCE = 90;
var BAR_WIDTH = 40;
var BAR_Y = 110;
var TEXT_GAME_X = 150;
var TEXT_GAME_Y = 25;
var TEXT_CLOUD_Y = 40;

/* чтобы не повторять код по 100 раз делаем шаблон для отрисовки канвас */
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
/* для нахождения макс значения */
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {

  var maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)'); /* отрисовка блоков цень */
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff'); /* отрисовка основы блока*/
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили', TEXT_GAME_X, TEXT_GAME_Y);
  ctx.fillText('Список результатов', TEXT_GAME_X - GAP, TEXT_CLOUD_Y);

  for (var i = 0; i < names.length; i++) {
    /* выводим статистику игроков имена и время*/
    ctx.fillText(names[i], CLOUD_X - BAR_WIDTH + DISTANCE + DISTANCE * i, NAME_Y);
    ctx.fillText(Math.floor(times[i]), CLOUD_X - BAR_WIDTH + DISTANCE + DISTANCE * i, BAR_Y - GAP - CLOUD_Y);
    /* условие подбора цвета */
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240,' + Math.floor(Math.random() * (100 + 1)) + '%, 50%)';
    }
    /* отрисовка самих блочков */
    ctx.fillRect(CLOUD_X - BAR_WIDTH + DISTANCE + DISTANCE * i, NAME_Y - GAP - CLOUD_Y - (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = 'black';
  }
};
