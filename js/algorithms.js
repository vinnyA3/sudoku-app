// Algorithms
module.exports = {
        // Generate Random Number: generate a random number between two numbers
        genRandom: function generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - 1) + min);
        },
        // Filter Unique: filter out all reoccuring elements in an array
        unique: function filterUnique(arr) {
            return arr.filter(function(val, idx, arr) {
                return arr.indexOf(val, idx + 1) < 0;
            });
        },
        /* Flip Array:
	This function will flip and array grid 90 deg to the right
	! view the array as a 9 X 9 grid ... its Sudoku!
	Note: This algorithm can be used to flip any grid array of equal size and
	column.  Just swap the hardcoded 9s to the desired number.
  ** Note: will refactor this alg and provide clearer documentation in to how
	this works!! */
        flipArr: function flipArray(arr) {
                var firstIndex,
                    newArr = [],
                    // The subract by variable will allows us to move 9 blocks to the
                    // next row and box number in the grid. we take that number and push
                    // that into the new arr
                    subtractBy = 9,
                    // In sudoku, the number of columns / rows will always be 9
                    columnNum = 9;
                while (columnNum > 0) {
                    // the first index variable is key here ... we are always subtracting
                    // the column every while loop. The will effectively shift the targeted
                    // column every pass.
                    firstIndex = ((arr.length - 1) - (columnNum - 1));
                    for (var i = firstIndex; i >= 0; i = i - subtractBy) {
                        newArr.push(arr[i]);
                    }
                    // subtract and go to the next column
                    columnNum--;
                } //end while
                return newArr;
            } // ./_flipArray

    } // ./module.exports
