
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

	 //create the grid
	 _createGrid();
	 //call temp
	 _temp();

  })(); //end sudoku module
