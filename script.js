//FINID SUM OF PARAMETERS
// function add(args){
//      var arry = Array.prototype.slice.call(arguments);
//      var total = 0;
//      console.log(arry);
     
//      for (var i = 0; i < arry.length; i++) {
//      	var value = Math.round(arry[i] / (i+1));
//      	total+=value;
//      };
//      return total;
// }

//  add(3,4,6); 


//CHECK FOR CORRECT COUPON CODE AND IF EXPIRED
//  function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

//  	var curr = new Date(currentDate);
//  	var exp = new Date(expirationDate);

//  	if (enteredCode == correctCode && curr.getTime() <= exp.getTime()) {
//  		//return true;
//  		console.log('true');
//  	} else {
//  		//return false;
//  		console.log('false');
//  	}
// }
//checkCoupon('123','123a','September 5, 2014','October 1, 2014');

// FIND PRODUCT OF DIAGONAL NUMBERS
// var backwards = [];
// function reverse(str) {
// 	if (str === "") {
//         return "";
//     } else {
//        	var n = str.length;
//         str = str.split('');
//         backwards.push(str.pop());
 		
//  		return n <= 1 ? console.log(backwards.join('')) : reverse(str.join(''));
//         //return n <= 1 ? backwards.join('') : reverse(str.join(''));
//     }
// }
// reverse('hello world');


// function mainDiagonalProduct(mat){
// var res = 1; 
//  for (var i = 0; i<mat.length; i++){
//  res *= mat[i][i]
//  }
//  // return res
//  console.log(res);
// }
// mainDiagonalProduct([[1,2,3],[4,5,6],[7,8,9]]);


// //FIND ARPEGGIO FROM SCALE
// function arpeggio(notes) {
// 	var rootNoteObj = {
// 		A: "ABCDEFGA",
// 		B: "BCDEFGAB",
// 		C: "CDEFGABC",
// 		D: "DEFGABCD",
// 		E: "EFGABCDE",
// 		F: "FGABCDEF",
// 		G: "GABCDEFG"
// 	}

// 	notes = notes.toUpperCase();

// 	if (notes in rootNoteObj) {
// 		var arr = rootNoteObj[notes].split('');
// 		var indexes = [0,2,4,7];
// 		var arpeg = [];
// 		for (var i = 0; i < indexes.length; i++) {
// 			console.log(arpeg.push(arr[indexes[i]]));
// 		}
// 	   	//console.log(arpeg);
// 	   	return arpeg;
// 	} else {
// 		console.log('unrecognised root note');
// 	}
// }
// arpeggio("A");









