//import Algorithms
var alg = require('./algorithms');
// cache sudoku element
var sudoku_container = document.querySelector('.sudoku');
// grid array -> virtual will contain all the numbers in the grid
var virtual_sudoku_grid = [];

function _createVirtualGrid(grid) {
		var sudokuRow;
		for(var i = 0; i < 9; ++i){
			sudokuRow = [];
			while (sudokuRow.length < 9) {
					sudokuRow.push(alg.genRandom(1, 10));
					sudokuRow = alg.unique(sudokuRow);
			}
			grid.push(sudokuRow);
		}
		return grid;
}
// Populate the sudoku grid in the gui
function _populateSudokuGui() {
	var sudoku_row;
	var sudoku_box;
	virtual_sudoku_grid.forEach(function(row) {
		sudoku_row = document.createElement('div');
		sudoku_row.className = 'sudoku__row';
		row.map(function(val) {
			sudoku_box = document.createElement('input');
			sudoku_box.className = 'sudoku__box';
			sudoku_box.value = val;
		  sudoku_row.appendChild(sudoku_box);
		});
		sudoku_container.appendChild(sudoku_row);
	});
}
// Initialize
function init() {
	virtual_sudoku_grid = _createVirtualGrid(virtual_sudoku_grid);
	console.log(virtual_sudoku_grid);
	_populateSudokuGui();
}
// Export init
exports.initialize = init;
