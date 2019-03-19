$(document).ready(function () {
    var Random = Math.floor(Math.random() * 101 + 19)
    $('#randomNumber').text(Random);

    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        playerTotal = 0;
        $('#finalTotal').text(playerTotal);
    }

    function great() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }

    $('#one').on('click', function () {
        playerTotal = playerTotal + num1;
        console.log("New playerTotal= " + playerTotal);
        $('#finalTotal').text(playerTotal);

        if (playerTotal == Random) {
            great();
        }

        else if (playerTotal > Random) {
            loser();
        }
    })
    $('#two').on('click', function () {
        playerTotal = playerTotal + num2;
        console.log("New playerTotal= " + playerTotal);
        $('#finalTotal').text(playerTotal);
        if (playerTotal == Random) {
            great();
        }
        else if (playerTotal > Random) {
            loser();
        }
    })
    $('#three').on('click', function () {
        playerTotal = playerTotal + num3;
        console.log("New playerTotal= " + playerTotal);
        $('#finalTotal').text(playerTotal);

        if (playerTotal == Random) {
            great();
        }
        else if (playerTotal > Random) {
            loser();
        }
    })
    $('#four').on('click', function () {
        playerTotal = playerTotal + num4;
        console.log("New playerTotal= " + playerTotal);
        $('#finalTotal').text(playerTotal);

        if (playerTotal == Random) {
            great();
        }
        else if (playerTotal > Random) {
            loser();
        }
    });
}); 