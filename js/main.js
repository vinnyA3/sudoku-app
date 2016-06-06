(function(){
	//require main sass file
	require('../styles/_main.scss');
	//require Controls
	require('./controls.js');
	//require sudoku
	var Sudoku = require('./sudoku.js');
	//intialize and create the Sudoku Grid
	Sudoku.render();
})();
