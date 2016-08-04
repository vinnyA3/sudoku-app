
var Sudoku = (function(){
   // cache sudoku element
   var sudoku_container = document.querySelector('.sudoku'),
	 		 // grid array -> virtual will contain all the numbers in the grid
			 virtual_sudoku_grid = [];

	 // Populate the sudoku virtual grid so we can our common occurance algorithms
	 function _genRandomNum(start,end) {
		 return Math.floor(Math.random() * (10 - 1) + 1);
	 }

	 function _createVirtualGrid() {
		 var virtual_sudoku_row = [];
		 var randomNum, count = 0, val, indices = [];
		 var sorted_row = [], d;
		 randomNum = _genRandomNum();
		 virtual_sudoku_row.push(randomNum);
		 for(var i = 1; i < 9; ++i) {
			 randomNum = _genRandomNum();
			 val = randomNum;
			 console.log("val is: "+ val);
			 //check if that random value is already in the arr
			 var idx = virtual_sudoku_row.indexOf(val);
			 while (idx != -1) {
				 indices.push(idx);
				 idx = virtual_sudoku_row.indexOf(val, idx + 1);
	 		 }
			 console.log("occurence of "+val+": "+indices.length);
			 if (indices.length > 0) {
				 console.log("We have more than 1 occurence...");
				 indices = [];
				 d = true;
				 do {
				 	 randomNum = _genRandomNum();
					 var idx = virtual_sudoku_row.indexOf(randomNum);
					 while (idx != -1) {
						 indices.push(idx);
						 idx = virtual_sudoku_row.indexOf(randomNum, idx + 1);
				 	 }
					 if(indices.length > 0) {
						 randomNum = _genRandomNum();
					 }
					 else {
						 console.log("The new value to be pushed in is: "+randomNum);
						 virtual_sudoku_row.push(randomNum);
						 // reset indices
						 indices = [];
						 d = false;
					 }
				 } while(d === true);
			 } else {
				 // reset indices
				 indices = [];
				 virtual_sudoku_row.push(val);
		 		}
		  }
		 console.log(virtual_sudoku_row);
		 /*for(var i = 0; i < 9; ++i) {
			 randomNum = Math.floor(Math.random() * (10 - 1) + 1);
			 virtual_sudoku_row.push(randomNum);
		 }
		 console.log("virtual row is: " + virtual_sudoku_row);
		 // check for common occurences
		 virtual_sudoku_row.forEach(function(val,idx,arr) {
			var replaceWith, indices = [], debug = 1, temp = arr.indexOf(val);
			while (temp != -1) {
  		 	indices.push(temp);
  			temp = arr.indexOf(val, temp + 1);
			}
			console.log("occurences of "+val+": "+indices.length);
			if( indices.length === 1 ) {
				console.log("no multiple occurences of "+val);
				sorted_row.push(val);
				console.log("sorted row: "+sorted_row);
		 	} else {
				do {
			  	replaceWith = Math.floor(Math.random() * (10 - 1) + 1);
					console.log("loop ran: " + debug + " times");
 					debug++;
				} while(replaceWith === val)

				sorted_row.push(replaceWith);
			}
		 });
		 console.log(sorted_row); */
	 }

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

		 /* virtual_row is a temp arr that will hold the content of the current row.
		 The purpose of this is to allow us to run a common occurance alg
		 on the values of the row. Sudoku does not allow multiple occurances
		 of the same number in a single row (or column) */
		 var virtual_row = [];
		 var sudoku_row = document.createElement('div');
		 var sudoku_box = document.createElement('input');
		 var current_row;
		 var current_box;
		 var randomNum;

		 for(var i = 0; i < 9; ++i){

			  current_row = ' row' + i;
				// add a labeling class to the sudoku row: row0, row1 ..etc
				sudoku_row.className = 'sudoku__row' + current_row;
				// Now, add 9 sudoku INPUT boxes to the current row
				for(var j = 0; j < 9; ++j){

					current_box = ' box' + j;
					// generate random number
					randomNum = Math.floor(Math.random() * (10 - 1) + 1);
					// push random number into virtual row
					virtual_row.push(randomNum);

					sudoku_box.className = 'sudoku__box' + current_box;

					sudoku_grid.push(randomNum);
					sudoku_box.value = randomNum;
					// append the sudoku box to the current sudoku module
					sudoku_row.appendChild(sudoku_box);
				}
				// append the sudoku module to the sudoku contaier
				container.appendChild(sudoku_row);
			}
	 } // ./_createGrid

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
		 // _createGrid();
		 // call temp
		 //_temp();
		 // debug
		 // console.log(sudoku_grid);
		 _createVirtualGrid();
	 }

	 return {
		 init: init
	 }

  })(); // end sudoku module

Sudoku.init();
