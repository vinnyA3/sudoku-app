//require mustache for box_hovered_template ..
var MustacheService = require('./services.js');

var Sudoku = (function(){

   var sudoku_container = document.querySelector('.sudoku'),
	 		 sudoku_box,
			 mustacheTemplate = MustacheService.getTemplate().then(function(data){
				  return data;
			 });
			 console.log(mustacheTemplate);
	 //flip array algorithm ... will refactor soon...
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

   function _createSubGrid(el){
      var element = el;
      for(var i = 0; i < 9; ++i){
        var box = document.createElement('div'),
				    box_module = document.createElement('div'),
            currentBox = ' box' + i;
				//add classes to the box
        box.className = 'box' + currentBox;
				//add the class to the box module and append that to the box
				box_module.className = 'box__hovered';
				box_module.innerHTML = mustacheTemplate;
				box.appendChild(box_module);
				//add mouse event listener to the box ( display: block)
				box.addEventListener('mouseover', function(){
					var box_content = this.querySelector('.box__hovered');
					box_content.style.display = 'block';
				});
				//add mouseout event (display: none)
				box.addEventListener('mouseout', function(){
					var box_content = this.querySelector('.box__hovered');
					box_content.style.display = 'none';
				});
        element.appendChild(box);
      }
    }

    function addGridModule() {
      //in the game sudoku, there are 9 modules containing 9 sub modules (boxes)
      for(var i = 0; i < 9; ++i) {
        //create the grid module, add the class and append to sudoku container
        var box = document.createElement('div'),
            currentModule = ' module' + i;
        box.className = 'sudoku__module' + currentModule;
        sudoku_container.appendChild(box);
        //create the sub grid
        _createSubGrid(box);
      }
    }
    return {
      createGrid: addGridModule
    }
  })(); //end sudoku module

module.exports = Sudoku;
