// variable to hold the player turn
var turn = "X";
// add a click to all the boxes with  function to add X or O in any click 
$('td').one('click',function(){
    $(this).text(turn);

    //check if there is any 3 in a row
    //check if the table is full
    //if full => restart the game
    //to toggle to the next player
    toggle();
})

//alternate between X and O
function toggle() {
    if (turn === "X") {
        turn = "O";;
    }
    else {
        turn = "X";
    }
}

// function to check if table is full
function isFull() {

}

