//import Algorithms
var alg = require('./algorithms');
// cache sudoku element
var sudoku_container = document.querySelector('.sudoku');
// grid array -> virtual will contain all the numbers in the grid
var virtual_sudoku_grid = [];

function _createVirtualGrid() {
		var sudokuRow = [];

		while (sudokuRow.length < 9) {
				sudokuRow.push(alg.genRandom(1, 10));
				sudokuRow = alg.unique(sudokuRow);
		}
		console.log(sudokuRow);
}
// Export init
exports.init = function init() {
		_createVirtualGrid();
}
