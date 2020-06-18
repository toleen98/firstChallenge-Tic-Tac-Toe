// variable to hold the player turn
var turn = "X";
// add a click to all the boxes with  function to add X or O in any click 
$('td').click(function(){
    if (!$(this).text()){
        $(this).text(turn);

        //check if there is any 3 in a row
    if(isRow()) {
        //alert with the winner name
        setTimeout(() => {
            alert(turn + ' is the winner');

            //then reset the game
           
        }, 100);       
    }
    //check if the table is full
    else if(isFull()) {
        //if full => restart the game
        alert("try again")    
    }
    else{
        //to toggle to the next player
        toggle();
    }
    }   
})

//reset button functionality
$('button').click(function() {
    reset();
    turn = 'X'
})

//        *** function work while the game is on ***
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
    var allTd = $('td');

    //iterat over all td
    for (var td of allTd) {
        if (!$(td).html()) {
            return false;     
        }   
    }
    return true;
}

// reset the game functhion 
function reset() {
   $('td').empty();    
}

// funchion to check if ther is any row match
function isRow() {
    // iterat 3 times to check for the the 3 cols and 3 rows
    for (var i = 1; i <= 3; i++) {
        var row = $('#row'+i+' td');
        var col = $('.col'+i);
       
        if (onCheck(row)) {
            return true;
        }
        if(onCheck(col)) {
            return true
        }    
    }

    // check for both left and right cross
    var rightCross = $('.rightCross');
    var leftCross = $('.leftCross');

    if (onCheck(rightCross)) {
        return true;
    }
    if(onCheck(leftCross)) {
        return true
    }    

    return false;

}


// function to check if there is any row matches
function onCheck(row) {
    var count = 0

    $(row).each(function (){
        if($(this).text() === turn) {
            count++;
        }
    });

    if (count === 3) {
        return true;
    }
}

