
var Sudoku = (function(){
   // cache sudoku element
   var sudoku_container = document.querySelector('.sudoku'),
	 		 // grid array -> will contain all the numbers in the grid
			 sudoku_grid = [];

	 // This function will flip and array grid 90 deg to the right
	 // ! view the array as a 9 X 9 grid ... its Sudoku!
	 // Note: This algorithm can be used to flip any grid array of equal size and
	 // column.  Just swap the hardcoded 9s to the desired number.
	 function _flipArray(arr){
			 var firstIndex,
					 newArr = [],
					 // The subract by variable will allows us to move 9 blocks to the
					 // next row and box number in the grid. we take that number and push
					 // that into the new arr
					 subtractBy = 9,
					 // In sudoku, the number of columns / rows will always be 9
					 columnNum = 9;
			 while(columnNum > 0){
				 // the first index variable is key here ... we are always subtracting
				 // the column every while loop. The will effectively shift the targeted
				 // column every pass.
				 firstIndex = ((arr.length - 1) - (columnNum - 1));
				 for(var i = firstIndex; i >= 0; i = i - subtractBy) {
						 newArr.push(arr[i]);
				 }
				 // subtract and go to the next column
				 columnNum--;
			 }//end while
			return newArr;
	 } // ./_flipArray

	 /*function _sudokuCheck(){
		 var sudoku_arr = sudoku_grid,
		 		 sudoku_column = [];
		 for(var i = 0 ; i < 9; ++i){

		 }
	 }*/

	 function _randomizeGrid(difficulty){
		 if(difficulty === 'easy'){
			 for(var i = 0; i < 81; ++i){
				 var randomNum = Math.random() * (10 - 1) + 1;
				 sudoku_grid.push(Math.floor(randomNum));
			 }
		 }
	 }// ./_randomizeGrid

	 // Dynamically create the grid
	 function _createGrid(){
		 // grab the cached DOM game container
		 var container = sudoku_container;
		 // Now, lets create the grid....
		 // 9 sudoku row will be dynamically created.
		 // A sudoku row is a container that will contain 9 boxes (sudoku__box)
		 for(var i = 0; i < 9; ++i){
			 var sudoku_row = document.createElement('div'),
					// add a labeling class to the sudoku row: row0, row1 ..etc
					current_row = ' row' + i;
					sudoku_row.className = 'sudoku__row' + current_row;
					// Now, add 9 sudoku INPUT boxes to the current module
					for(var j = 0; j < 9; ++j){
						var sudoku_box = document.createElement('input'),
						current_box = ' box' + j;
						sudoku_box.className = 'sudoku__box' + current_box;
						var randomNum = Math.random() * (10 - 1) + 1;
						sudoku_grid.push(Math.floor(randomNum));
						sudoku_box.value = Math.floor(randomNum);
						// append the sudoku box to the current sudoku module
						sudoku_row.appendChild(sudoku_box);
					}
					// append the sudoku module to the sudoku contaier
					container.appendChild(sudoku_row);
			}
	 }// ./_createGrid

	 // test function-> get the children of all the sudoku__modules(sudoku__boxes)
	 // and change the color to salmon :D
	 function _temp(){
		 // define our variables -> sudoku container, and sudoku_modules
		 	var container = sudoku_container,
					sudoku_modules = container.querySelectorAll('.sudoku__module');
			// loop over nodelist of modules
			sudoku_modules.forEach(function(module){
				// convert the nodelist (module) to a traversable array object
				var sudoku_boxes = Array.prototype.slice
					.call(module.children)
					.forEach(function(box){
						box.style.background = 'salmon';
					});
			});
			// call _randomizeGrid ... temp
			console.log(sudoku_grid);
			// _randomizeGrid('easy');
	 }

	 function init(){
		 // create the grid
		 _createGrid();
		 // call temp
		 _temp();
		 // debug
		 console.log(sudoku_grid);
	 }

	 return {
		 init: init
	 }

  })(); // end sudoku module

Sudoku.init();
