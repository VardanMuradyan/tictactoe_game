for (let i = 0; i < 9; i++) {
    document.getElementById('game').innerHTML += '<div class="block"></div>'
}

let player = 0;
let count_1 = 0;
let count_2 = 0;


document.getElementById("game").addEventListener("click", function (event) {
    if (event.target.className === "block") {

        if (player % 2 === 0) {
            event.target.innerHTML = '<p class="player1">x</p>';
        } else {
            event.target.innerHTML = '<p class="player2">0</p>';
        }
    }
    player++;
    checkWinn();

    function checkWinn() {

        let arrBlocks = document.getElementsByClassName("block");
        //// x win

        if (arrBlocks[0].innerText === "X" && arrBlocks[1].innerText === "X" && arrBlocks[2].innerText === "X") {
            alert("Player - 1 win")
            count_1 = count_1 + 1;

        }

        if (arrBlocks[3].innerText === 'X' && arrBlocks[4].innerText === 'X' && arrBlocks[5].innerText === 'X') {
            alert("Player - 1 win")
            count_1 = count_1 + 1;
        }

        if (arrBlocks[6].innerText === 'X' && arrBlocks[7].innerText === 'X' && arrBlocks[8].innerText === 'X') {
            alert("Player - 1 win")
            count_1 = count_1 + 1;
        }
        if (arrBlocks[0].innerText === 'X' && arrBlocks[3].innerText === 'X' && arrBlocks[6].innerText === 'X') {
            alert("Player - 1 win")
            count_1 = count_1 + 1;
        }
        if (arrBlocks[2].innerText === 'X' && arrBlocks[5].innerText === 'X' && arrBlocks[8].innerText === 'X') {
            alert("Player - 1 win")
            count_1 = count_1 + 1;
        }
        if (arrBlocks[1].innerText === 'X' && arrBlocks[4].innerText === 'X' && arrBlocks[7].innerText === 'X') {
            alert("Player - 1 win")
            count_1 = count_1 + 1;
        }

        if (arrBlocks[0].innerText === 'X' && arrBlocks[4].innerText === 'X' && arrBlocks[8].innerText === 'X') {
            alert("Player - 1 win")
            count_1 = count_1 + 1;
        }

        if (arrBlocks[2].innerText === 'X' && arrBlocks[4].innerText === 'X' && arrBlocks[6].innerText === 'X') {
            alert("Player - 1 win")
            count_1 = count_1 + 1;
        }

        //// 0 win

        if (arrBlocks[0].innerText === '0' && arrBlocks[1].innerText === '0' && arrBlocks[2].innerText === '0') {
            alert("Player - 2 win")
            count_2 = count_2 + 1;
        }

        if (arrBlocks[3].innerText === '0' && arrBlocks[4].innerText === '0' && arrBlocks[5].innerText === '0') {
            alert("Player - 2 win")
            count_2 = count_2 + 1;
        }

        if (arrBlocks[6].innerText === '0' && arrBlocks[7].innerText === '0' && arrBlocks[8].innerText === '0') {
            alert("Player - 2 win")
            count_2 = count_2 + 1;
        }
        if (arrBlocks[0].innerText === '0' && arrBlocks[3].innerText === '0' && arrBlocks[6].innerText === '0') {
            alert("Player - 2 win")
            count_2 = count_2 + 1;
        }
        if (arrBlocks[2].innerText === '0' && arrBlocks[5].innerText === '0' && arrBlocks[8].innerText === '0') {
            alert("Player - 2 win")
            count_2 = count_2 + 1;
        }
        if (arrBlocks[1].innerText === '0' && arrBlocks[4].innerText === '0' && arrBlocks[7].innerText === '0') {
            alert("Player - 2 win")
            count_2 = count_2 + 1;
        }

        if (arrBlocks[0].innerText === '0' && arrBlocks[4].innerText === '0' && arrBlocks[8].innerText === '0') {
            alert("Player - 2 win")
            count_2 = count_2 + 1;
        }

        if (arrBlocks[2].innerText === '0' && arrBlocks[4].innerText === '0' && arrBlocks[6].innerText === '0') {
            alert("Player - 2 win")
            count_2 = count_2 + 1;
        }

    }

    function countWin_1() {
        return document.querySelector(".count_1").innerHTML = `${count_1}`
    }

    function countWin_2() {
        return document.querySelector(".count_2").innerHTML = `${count_2}`
    }

    countWin_1()
    countWin_2()
})




