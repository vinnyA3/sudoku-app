
var Sudoku = (function(){
   //cache sudoku element
   var sudoku_container = document.querySelector('.sudoku');

	 //This function will flip and array grid 90 deg to the right
	 // ! view the array as a 9 X 9 grid ... its Sudoku!
	 //Note: This algorithm can be used to flip any grid array of equal size and
	 //column.  Just swap the hardcoded 9s to the desired number.
	 function _flipArray(arr){
			 var firstIndex,
					 newArr = [],
					 //The subract by variable will allows us to move 9 blocks to the
					 //next row and box number in the grid. we take that number and push
					 //that into the new arr
					 subtractBy = 9,
					 //In sudoku, the number of columns / rows will always be 9
					 columnNum = 9;
			 while(columnNum > 0){
				 //the first index variable is key here ... we are always subtracting
				 // the column every while loop.  The will effectively shift the targeted
				 // column every pass.
				 firstIndex = ((arr.length - 1) - (columnNum - 1));
				 for(var i = firstIndex; i >= 0; i = i - subtractBy) {
						 newArr.push(arr[i]);
				 }
				 //subtract and go to the next column
				 columnNum--;
			 }//end while
			return newArr;
	 } //./_flipArray

	 // Dynamically creat the grid
	 function _createGrid(){
		 //grab the cached DOM game container
		 var container = sudoku_container;
		 //Now, lets create the grid....
		 //9 sudoku modules will be dynamically created. A sudoku module is a container that will contain 9 boxes (sudoku__box)
		 for(var i = 0; i < 9; ++i){
			 var sudoku_module = document.createElement('div'),
					//add a labeling class to the sudoku module: module0, module1 ..etc
					current_module = ' module' + i;
					sudoku_module.className = 'sudoku__module' + current_module;
					//Now, add 9 sudoku boxes to the current module
					for(var j = 0; j < 9; ++j){
						var sudoku_box = document.createElement('div'),
						current_box = ' box' + j;
						sudoku_box.className = 'sudoku__box' + current_box;
						//append the sudoku box to the current sudoku module
						sudoku_module.appendChild(sudoku_box);
					}
					//append the sudoku module to the sudoku contaier
					container.appendChild(sudoku_module);
			}
	 }// ./_createGrid

	 //test function -> get the children of all the sudoku__modules (sudoku__boxes)
	 // and change the color to salmon :D
	 function _temp(){
		 //define our variables -> sudoku container, and sudoku_modules
		 	var container = sudoku_container,
					sudoku_modules = container.querySelectorAll('.sudoku__module');
			//loop over nodelist of modules
			sudoku_modules.forEach(function(module){
				//convert the nodelist (module) to a traversable array object
				var sudoku_boxes = Array.prototype.slice
					.call(module.children)
					.forEach(function(box){
						box.style.background = 'salmon';
					});
			});
	 }

	 function init(){
		 //create the grid
		 _createGrid();
		 //call temp
		 _temp();
	 }

	 return {
		 init: init
	 }

  })(); //end sudoku module
