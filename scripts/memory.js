var numberOfButtons;

$('#game-board, #exit-game').hide()

function startGame() {
    $('#welcome-screen').fadeOut(2000);
    $('#game-board, #exit-game').delay(2000).fadeIn(2000);
}

function cardWidth(cardHeight)  {
    var cardRatio = 63 / 88;
    var cWidth;
    return cdWidth = cardHeight * cardRatio;
}

function gameExit() {
    $('#game-board, #exit-game').fadeOut(2000);
    $('#welcome-screen').delay(2000).fadeIn(2000);
}

$('#card1').height(250).width(cardWidth(250));