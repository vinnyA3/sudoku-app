  var Sudoku = (function(){

   var sudoku_container = document.querySelector('.sudoku')

   function _createSubGrid(el){
      var element = el;
      for(var i = 0; i < 9; ++i){
        var box = document.createElement('div'),
            currentBox = ' box' + i;
        box.className = 'box' + currentBox;
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

  Sudoku.createGrid();
