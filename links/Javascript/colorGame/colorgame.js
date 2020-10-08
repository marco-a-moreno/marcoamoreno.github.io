var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


//when easy button is pressed
    easyBtn.addEventListener("click", function(){
        h1.style.backgroundColor = "steelblue";
        easyBtn.classList.add("selected");
        hardBtn.classList.remove("selected");
        numSquares = 3;
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        
        colorDisplay.textContent = pickedColor;
        for (var i = 0; i < squares.length; i++){
            if(colors[i]){
                squares[i].style.backgroundColor = colors[i];
            }else{
                
                squares[i].style.backgroundColor = "#232323";
            }
        }
    })
//when hard button is pressed
    hardBtn.addEventListener("click", function(){
        h1.style.backgroundColor = "steelblue";
        hardBtn.classList.add("selected");
        easyBtn.classList.remove("selected");
        numSquares = 6;
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for (var i = 0; i < squares.length; i++){
        
                squares[i].style.backgroundColor = colors[i];
                squares[i].style.backgroundColor = "block";
                
        }

    })
//when reset button is pressed
    resetButton.addEventListener("click", function(){
        //generate all new colors 
        colors = generateRandomColors(numSquares);
        //pick a new random color from array
        pickedColor = pickColor();
        //change colorDisplay to match picked color
        colorDisplay.textContent = pickedColor;
        //change the colors of squares
        for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
        }
        h1.style.backgroundColor = "steelblue";
       
        messageDisplay.textContent = "";
         resetButton.textContent = "New Colors";
    })

    colorDisplay.textContent = pickedColor;

  

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];


    //add click listeners to squares
    squares[i].addEventListener("click", function(){
    

    //grab color of clicked square 
    //compare color to pickedColor

    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again ?"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
    }else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
}//else

});//eventlistener


}//for loop

function changeColors(color){
        //loop through all squares 

        for(var x = 0; x < squares.length; x++){
        //change colors to match given color
        squares[x].style.backgroundColor = color;
        }
        
}

function pickColor(){
        //pick a random number;
        var random = Math.floor(Math.random() * colors.length);

        return colors[random];
}

function generateRandomColors(num){
        //make an array

        var arr = []
        //add num random colors to the array
        for (var i = 0; i < num; i++){
            //get random color and push into array
            arr.push(randomColor())
        }
        //return that array
        return arr;
        }

function randomColor(){
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
   return "rgb(" + r +", "+ b +", "+ g +")";
    
}
