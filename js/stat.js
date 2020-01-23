'use strict';

var CLOUD_WIDTH = 270;
var CLOUD_HEIGHT = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var NAME_Y = 290;
var BAR_HEIGHT = 150;
var DISTANCE = 50;
var BAR_WIDTH = 40;
var BAR_Y = 110;
var TEXT_GAME_X = 150;
var TEXT_GAME_Y = 25;
var TEXT_CLOUD_Y = 40;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


window.renderStatistics = function (ctx, players, times) {
  var maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили', TEXT_GAME_X, TEXT_GAME_Y);
  ctx.fillText('Список результатов', TEXT_GAME_X - GAP, TEXT_CLOUD_Y);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP + DISTANCE * i, NAME_Y);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + DISTANCE * i, BAR_Y - DISTANCE + GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'hsl(240,' + Math.floor(Math.random() * (100 + 1)) + '%, 50%)';
    }

    ctx.fillRect(CLOUD_X + GAP + DISTANCE * i, NAME_Y - DISTANCE - (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = 'black';
  }
};
