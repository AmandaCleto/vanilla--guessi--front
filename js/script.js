/**
 * Explication: Rock means the wrong spot
 * 
 * 
 */

let numberOfBoxes = 30;
let numberOfRocks = 0;
let rightSpots = 0;
let fullBox = document.getElementsByClassName("bx"); //we have 30 boxes in an obj
let boxes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //array with 30 places

//random wrong spots
let rock1 = parseInt(((Math.random() * 100) / 3.33)) + 1;
let rock2 = parseInt(((Math.random() * 100) / 3.33)) + 1;
let rock3 = parseInt(((Math.random() * 100) / 3.33)) + 1;
let rock4 = parseInt(((Math.random() * 100) / 3.33)) + 1;
let rock5 = parseInt(((Math.random() * 100) / 3.33)) + 1;

//console.log(rock1, rock2, rock3, rock4, rock5, rock6)

//filling in the array of boxes with rocks
for (var i = 1; i <= fullBox.length; i++) {
    if (i == rock1) {
        boxes[i] = 1;
    }
    if (i == rock2) {
        boxes[i] = 1;
    }
    if (i == rock3) {
        boxes[i] = 1;
    }
    if (i == rock4) {
        boxes[i] = 1;
    }
    if (i == rock5) {
        boxes[i] = 1;
    }
}


//finding the "wrong" box
for (var i = 1; i <= fullBox.length; i++) {
    if (boxes[i] == 1) {
        //console.log(i);
        numberOfRocks++; //counting how many rocks there are
    }
}

//init the game
function startGame() {
    var btn = document.querySelector('#menu_btn');
    btn.disabled = "true";
    document.getElementById("bx1").onclick = "chosenOption()";
    for (var i = 1; i <= fullBox.length; i++) {
        document.getElementById("bx" + i).style.cursor = "pointer";
        document.getElementById("bx" + i).style.backgroundColor = "#A0A0D3";
        document.getElementById("bx" + i).style.color = "white";
    }
    document.getElementById("heart1").style.color = "#C83D3D";
    document.getElementById("heart2").style.color = "#C83D3D";
    document.getElementById("heart3").style.color = "#C83D3D";

    //showing the number of rocks there are in this game
    document.getElementById("numberOfRocks").innerHTML = numberOfRocks;
};


//find if the clicked option is the correct one
function chosenOption() {
    var option = document.getElementById('boxes');
    option.addEventListener('click', function(e) {
        for (var i = 1; i <= fullBox.length; i++) {
            //if is not the rock, hide
            if (e.target.id == "bx" + i && i != rock1 && i != rock2 && i !== rock3 && i != rock4 && i !== rock5) {
                document.getElementById("bx" + i).style.visibility = "hidden";
                rightSpots++; //counting the number of right spots
                winner() //calling the function to see if the user had won
                break;
            }

            //if it's the box, turn into a rock
            if (e.target.id == "bx" + i && i == rock1) {
                document.getElementById("bx" + i).style.backgroundColor = "brown";
                document.getElementById("bx" + i).style.borderRadius = "100%";
                amountHeart()
                winner() //calling the function to see if the user had won
                break;
            }
            if (e.target.id == "bx" + i && i == rock2) {
                document.getElementById("bx" + i).style.backgroundColor = "brown";
                document.getElementById("bx" + i).style.borderRadius = "100%";
                amountHeart()
                winner() //calling the function to see if the user had won
                break;
            }
            if (e.target.id == "bx" + i && i == rock3) {
                document.getElementById("bx" + i).style.backgroundColor = "brown";
                document.getElementById("bx" + i).style.borderRadius = "100%";
                amountHeart()
                winner() //calling the function to see if the user had won
                break;
            }
            if (e.target.id == "bx" + i && i == rock4) {
                document.getElementById("bx" + i).style.backgroundColor = "brown";
                document.getElementById("bx" + i).style.borderRadius = "100%";
                amountHeart()
                winner() //calling the function to see if the user had won
                break;
            }
            if (e.target.id == "bx" + i && i == rock5) {
                document.getElementById("bx" + i).style.backgroundColor = "brown";
                document.getElementById("bx" + i).style.borderRadius = "100%";
                amountHeart()
                winner() //calling the function to see if the user had won
                break;
            }
        }
    })
};

//hearts
let heart1 = 1;
let heart2 = 1;
let heart3 = 1;

//does I still have hearts?
function amountHeart() {
    if (heart1 == 1 && heart2 == 1 && heart3 == 1) {
        heart1 = 0;
        document.getElementById("heart1").style.display = "none";
        return
    }
    if (heart1 == 0 && heart2 == 1 && heart3 == 1) {
        heart2 = 0;
        document.getElementById("heart2").style.display = "none";
        return;
    }
    if (heart1 == 0 && heart2 == 0 && heart3 == 1) {
        heart3 = 0;
        document.getElementById("heart3").style.display = "none";
        gameOver()
    }
}


//using for the calculation, to see if the user had won or not
/**
 * numberOfBoxes = 30
 * numberOfRocks = ?
 * 
 */
let winNumber = numberOfBoxes - numberOfRocks;

function winner() {
    if (winNumber == rightSpots && heart1 == 0 && heart2 == 1 && heart3 == 1) {
        //no more touch
        for (var i = 1; i <= fullBox.length; i++) {
            document.getElementById("bx" + i).style.pointerEvents = "none";
        }
        //creating a new menu_box
        document.getElementById("menu_message").style.backgroundColor = "#426D6E";

        document.getElementById("menu_first").innerHTML = "Huia, ganhou com 2 vidas restando ainda!";
        document.getElementById("menu_first").style.color = "white";

        document.getElementById("menu_secondary").innerHTML = "Merece créditos, meus parabéns!";
        document.getElementById("menu_secondary").style.color = "white";

        document.getElementById("menu_hint").innerHTML = "Jogue de novo e tente ganhar com 3 vidas agora!!";
        document.getElementById("menu_hint").style.color = "white";

        //hiding the start button
        document.getElementById("menu_btn").style.display = "none";

        //showing the reset button
        document.getElementById("menu_btn_reflesh").style.display = "block";
        return;
    }
    if (winNumber == rightSpots && heart1 == 0 && heart2 == 0 && heart3 == 1) {
        //no more touch
        for (var i = 1; i <= fullBox.length; i++) {
            document.getElementById("bx" + i).style.pointerEvents = "none";
        }
        //creating a new menu_box
        document.getElementById("menu_message").style.backgroundColor = "#426D6E";

        document.getElementById("menu_first").innerHTML = "Hihi, ganhou no sufoco né, com somente 1 vida restando...";
        document.getElementById("menu_first").style.color = "white";

        document.getElementById("menu_secondary").innerHTML = "Mas, merece os créditos, parabéns!";
        document.getElementById("menu_secondary").style.color = "white";

        document.getElementById("menu_hint").innerHTML = "Jogue de novo e tente ganhar com 3 vidas agora!!";
        document.getElementById("menu_hint").style.color = "white";

        //hiding the start button
        document.getElementById("menu_btn").style.display = "none";

        //showing the reset button
        document.getElementById("menu_btn_reflesh").style.display = "block";
        return;
    }
    if (winNumber == rightSpots && heart1 == 1 && heart2 == 1 && heart3 == 1) {
        //no more boxes
        for (var i = 1; i <= fullBox.length; i++) {
            document.getElementById("bx" + i).style.pointerEvents = "none";
        }
        //creating a new menu_box
        document.getElementById("menu_message").style.backgroundColor = "#426D6E";

        document.getElementById("menu_first").innerHTML = "Caraca, você é um ninja!!!";
        document.getElementById("menu_first").style.color = "white";

        document.getElementById("menu_secondary").innerHTML = "Mil milhões de parabéns a você!!!";
        document.getElementById("menu_secondary").style.color = "white";

        document.getElementById("menu_hint").innerHTML = "Desafie seus amigos para ver quem é melhor! E claro, jogue de novo :D";
        document.getElementById("menu_hint").style.color = "white";

        //hiding the start button
        document.getElementById("menu_btn").style.display = "none";

        //showing the reset button
        document.getElementById("menu_btn_reflesh").style.display = "block";

        //Creating the risk for the mouth
        var divRisc = document.createElement('img');
        divRisc.style.height = "100px";
        divRisc.style.width = "108px";
        divRisc.style.marginBottom = "-10px";
        divRisc.style.marginLeft = "15px";
        divRisc.src = "img/happy_mascot.png";
        divRisc.style.pointerEvents = "true";

        //putting the new risk inside the smile
        document.getElementById("menu_reflesh").appendChild(divRisc);
        return;
    }
}


//game over
function gameOver() {
    //no more boxes
    for (var i = 1; i <= fullBox.length; i++) {
        document.getElementById("bx" + i).style.display = "none";
    }

    //creating a new menu_box
    document.getElementById("menu_message").style.backgroundColor = "#426D6E";

    document.getElementById("menu_first").innerHTML = "Opa, parece que você perdeu, não é mesmo??";
    document.getElementById("menu_first").style.color = "white";

    document.getElementById("menu_secondary").innerHTML = "Mas sem problemas, é só jogar de novo!";
    document.getElementById("menu_secondary").style.color = "white";

    document.getElementById("menu_hint").innerHTML = "Te desafio a ganhar com as 3 vidas intactas hehe";
    document.getElementById("menu_hint").style.color = "white";

    //hiding the start button
    document.getElementById("menu_btn").style.display = "none";

    //showing the reset button
    document.getElementById("menu_btn_reflesh").style.display = "block";
}