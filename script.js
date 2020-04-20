// /// setting up prepared sudokus to be used in each difficulty of game // 

var solvedSudokuEasy =
    [
        [[6, 5, 9, 3, 1, 4, 2, 8, 7],
        [1, 8, 7, 6, 5, 2, 4, 3, 9],
        [2, 3, 4, 8, 9, 7, 5, 1, 6],
        [4, 2, 6, 1, 3, 5, 9, 7, 8],
        [8, 7, 1, 9, 4, 6, 3, 5, 2],
        [5, 9, 3, 2, 7, 8, 6, 4, 1],
        [3, 1, 2, 5, 8, 9, 7, 6, 4],
        [7, 6, 5, 4, 2, 1, 8, 9, 3],
        [9, 4, 8, 7, 6, 3, 1, 2, 5]]
        ,
        [[4, 6, 5, 8, 7, 2, 3, 9, 1],
        [8, 9, 2, 1, 3, 6, 5, 4, 7],
        [7, 1, 3, 4, 9, 5, 6, 2, 8],
        [2, 4, 1, 6, 5, 8, 7, 3, 9],
        [3, 8, 6, 9, 4, 7, 2, 1, 5],
        [5, 7, 9, 2, 1, 3, 8, 6, 4],
        [9, 2, 7, 3, 8, 4, 1, 5, 6],
        [1, 3, 8, 5, 6, 9, 4, 7, 2],
        [6, 5, 4, 7, 2, 1, 9, 8, 3]]
        ,
        [[7, 3, 6, 8, 1, 4, 9, 2, 5],
        [5, 4, 9, 6, 3, 2, 1, 7, 8],
        [2, 1, 8, 9, 5, 7, 3, 6, 4],
        [6, 5, 4, 2, 8, 1, 7, 9, 3],
        [9, 2, 3, 7, 4, 6, 8, 5, 1],
        [1, 8, 7, 3, 9, 5, 2, 4, 6],
        [8, 7, 5, 4, 2, 3, 6, 1, 9],
        [3, 6, 1, 5, 7, 9, 4, 8, 2],
        [4, 9, 2, 1, 6, 8, 5, 3, 7]]
    ];


var solvedSudokuMedium =

    [
        [[7, 6, 1, 8, 4, 9, 2, 3, 5],
        [9, 3, 2, 1, 5, 7, 4, 6, 8],
        [4, 8, 5, 2, 6, 3, 1, 7, 9],
        [1, 9, 7, 6, 3, 4, 5, 8, 2],
        [6, 2, 8, 7, 1, 5, 9, 4, 3],
        [5, 4, 3, 9, 8, 2, 6, 1, 7],
        [3, 7, 4, 5, 2, 6, 8, 9, 1],
        [2, 1, 9, 4, 7, 8, 3, 5, 6],
        [8, 5, 6, 3, 9, 1, 7, 2, 4]]
        ,
        [[4, 1, 5, 6, 9, 2, 7, 8, 3],
        [3, 9, 2, 7, 1, 8, 5, 4, 6],
        [8, 6, 7, 3, 5, 4, 1, 2, 9],
        [9, 2, 6, 8, 4, 7, 3, 5, 1],
        [1, 3, 4, 2, 6, 5, 8, 9, 7],
        [7, 5, 8, 1, 3, 9, 2, 6, 4],
        [5, 4, 1, 9, 2, 3, 6, 7, 8],
        [2, 8, 3, 4, 7, 6, 9, 1, 5],
        [6, 7, 9, 5, 8, 1, 4, 3, 2]]
        ,
        [[8, 9, 1, 7, 6, 4, 5, 2, 3],
        [5, 4, 6, 3, 1, 2, 7, 8, 9],
        [3, 2, 7, 9, 8, 5, 1, 6, 4],
        [9, 8, 4, 2, 5, 3, 6, 1, 7],
        [2, 7, 3, 6, 4, 1, 9, 5, 8],
        [6, 1, 5, 8, 7, 9, 3, 4, 2],
        [7, 5, 2, 4, 9, 6, 8, 3, 1],
        [4, 6, 9, 1, 3, 8, 2, 7, 5],
        [1, 3, 8, 5, 2, 7, 4, 9, 6]]
    ]



var solvedSudokuHard =

    [
        [[6, 8, 4, 1, 5, 9, 7, 3, 2],
        [7, 5, 1, 8, 3, 2, 9, 4, 6],
        [9, 2, 3, 6, 7, 4, 1, 8, 5],
        [1, 9, 2, 3, 6, 5, 8, 7, 4],
        [8, 4, 5, 2, 1, 7, 6, 9, 3],
        [3, 6, 7, 4, 9, 8, 2, 5, 1],
        [2, 3, 9, 7, 4, 6, 5, 1, 8],
        [5, 1, 6, 9, 8, 3, 4, 2, 7],
        [4, 7, 8, 5, 2, 1, 3, 6, 9]]
        ,
        [[4, 3, 6, 1, 2, 8, 7, 5, 9],
        [9, 5, 1, 7, 4, 6, 2, 8, 3],
        [8, 7, 2, 3, 5, 9, 4, 1, 6],
        [7, 8, 5, 9, 1, 4, 3, 6, 2],
        [2, 1, 3, 6, 7, 5, 8, 9, 4],
        [6, 9, 4, 2, 8, 3, 5, 7, 1],
        [5, 2, 8, 4, 9, 1, 6, 3, 7],
        [1, 6, 7, 5, 3, 2, 9, 4, 8],
        [3, 4, 9, 8, 6, 7, 1, 2, 5]]
        ,
        [[6, 4, 7, 5, 3, 8, 1, 9, 2],
        [9, 5, 3, 2, 6, 1, 4, 7, 8],
        [2, 8, 1, 4, 9, 7, 6, 5, 3],
        [8, 6, 5, 7, 2, 9, 3, 1, 4],
        [3, 9, 4, 1, 8, 5, 2, 6, 7],
        [7, 1, 2, 6, 4, 3, 9, 8, 5],
        [1, 2, 8, 9, 7, 4, 5, 3, 6],
        [5, 7, 6, 3, 1, 2, 8, 4, 9],
        [4, 3, 9, 8, 5, 6, 7, 2, 1]]
    ]






//// login screen function to check if name and password match and give a massage if its wrong ///

function login() {
    let res = 0;
    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;

    if (userName == 'abcd') {
        res++
        document.getElementById('incorrectName').innerHTML = 'User name is ok';
    } else {
        document.getElementById('incorrectName').innerHTML = 'Incorrect username';


    }
    if (password == '1234') {
        document.getElementById('incorrectPassword').innerHTML = 'password is ok';

        res++;
    } else {
        document.getElementById('incorrectPassword').innerHTML = 'Incorrect password';

    }
    if (res == 2) {

        window.open("./difficulty.html"); // for open other page after Correct function
        
    }

}




//// applying radio selection on any cell ////

function radioChoice() {

    let choice = document.getElementsByName('choice');
    let td = document.getElementsByTagName("td");
    for (x = 0; x < choice.length; x++) {
        if (choice[x].checked) {
            let chosen = choice[x].value;
            for (let i = 0; i < td.length; i++) {
                if (td[i].style.backgroundColor == 'white') {
                    td[i].addEventListener('click', () => {
                        td[i].innerHTML = chosen;
                    });
                }
            }
        }
    }
}
radioChoice();




// a function that hides table cells values //

function hideCells(cellsToHide) {
    // debugger    
    for (let i = 0; i < cellsToHide; i++) {   
        let randomCell = Math.floor(Math.random() * (80 - 0) + 1);
        let cellContent = document.getElementsByTagName('td')[randomCell].textContent;
        if (cellContent !== '') {
            document.getElementsByTagName('td')[randomCell].textContent = '';
            document.getElementsByTagName('td')[randomCell].style.backgroundColor = 'white';
        } else {
            i--;
        }
        // if (cellContent == '') {
        //     cellContent.disabled = false;
        // }
    }
}



// global var to be used by functions, to check if a sudoku matches the sudoku on display //
var chosenSudoku;


// functions, for when each is called - a random sudoku will be printed on the page 
// - the random will come from the list of sudoku , located on top of this page

function printEasySudoku(sudoku) {
    sudoku = solvedSudokuEasy[Math.round(Math.random() * (2 - 0))];
    chosenSudoku = sudoku;
    var table = document.getElementById('table');
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            table.rows[i].cells[j].textContent = sudoku[i][j];
        }
    }
    hideCells(20);
}
//  ^^ prints a random of 3 easy sudokus, starting the random from 0 (as an index for the array) //

function printMediumSudoku(sudoku) {
    sudoku = solvedSudokuMedium[Math.round(Math.random() * (2 - 0))];
    chosenSudoku = sudoku;
   
    var table = document.getElementById('table');
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            table.rows[i].cells[j].textContent = sudoku[i][j];
        }
    }
    hideCells(40);
}
//  ^^ prints a random of 3 medium sudokus, starting the random from 0 (as an index for the array) //

function printHardSudoku(sudoku) {
    sudoku = solvedSudokuHard[Math.round(Math.random() * (2 - 0))];
    chosenSudoku = sudoku;
    var table = document.getElementById('table');
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            table.rows[i].cells[j].textContent = sudoku[i][j];
        }
    }
    hideCells(61);
}
//  ^^ prints a random of 3 hard sudokus, starting the random from 0 (as an index for the array) //



// a function for when called - checks if the sudoku is valid - inserting the numbers on page to a matrix and comparing it with existing one
// if they are equal, the sudoku is valid and a success massage will be given, if not a failed massage. 

function checkSudoku() {
    // debugger;
    let failed = 0;
    let matToMatch = [[], [], [], [], [], [], [], [], []];
    var table = document.getElementById('table');
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (table.rows[i].cells[j].innerHTML == chosenSudoku[i][j]) {
                let strToInt = parseInt(table.rows[i].cells[j].innerHTML)//parseInt chang string to number
                matToMatch[i].push(strToInt);
            } else {
                failed++;
            }

        }
    }
    if (failed == 0) {
        alert('Nice Job!');
        
    } else {
        alert('Do try again');
    }
}


// calculating percentage for hiding cells //
// function percentage(num, per){
// return Math.round((num/100)*per);
// }
// console.log(percentage(81, 75));