
var Sudoku = (function(){

   var sudoku_container = document.querySelector('.sudoku');
	 //flip array algorithm ... used for game checking..will refactor soon...
	 /*
	 	var arr1 = [1,2,3,
            	4,5,6,
            	7,8,9];
		function flipArray(arr, numRowAndCols){
  		var firstIndex,
      		newArr = [],
      		subtractBy = numRowsandCols,
      		columnNum = numRowsandCols;
			while(columnNum > 0){
    		firstIndex = ((arr.length - 1) - (columnNum - 1));
    		for(var i = firstIndex; i >= 0; i = i - subtractBy) {
 	 				newArr.push(arr[i]);
				}
    		columnNum--;
  		}
  		return newArr;
		}
		var flippedArr = flipArray(arr1,3);
		console.log(flippedArr);
	 */
	 function _createGrid(){
		 //grab the cached DOM game container
		 var container = sudoku_container;
		 //Now, lets create the grid....
		 //9 sudoku modules will be dynamically created. A sudoku module is a container that will contain 9 boxes (sudoku__box)
		 for(var i = 0; i < 9; ++i){
			 var sudoku__module = document.createElement('div'),
					//add a labeling class to the sudoku module: module0, module1 ..etc
					current_module = ' module' + i;
					sudoku__module.className = 'sudoku__module' + current_module;
					//Now, add 9 sudoku boxes to the current module
					for(var j = 0; j < 9; ++j){
						var sudoku__box = document.createElement('div'),
						current_box = ' box' + j;
						sudoku__box.className = 'sudoku__box' + current_box;
						//append the sudoku box to the current sudoku module
						sudoku__module.appendChild(sudoku__box);
					}
					//append the sudoku module to the sudoku contaier
					container.appendChild(sudoku__module);
			}
	 }// ./_createGrid

	 //create the grid
	 _createGrid();

  })(); //end sudoku module
