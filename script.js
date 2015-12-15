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


//SORT AGES IN ACENDING ORDER USING ES6 Arrow Functions
// var people = [
//   { age: 46, name: 'roger' },
//   { age: 99, name: 'vinny' },
//   { age: 26, name: 'don' },
//   { age: 74, name: 'brendan'}
// ]

// var OrderPeople = function(people){
// 	console.log(JSON.stringify(people));
// 	console.log(JSON.stringify(people.sort( (a,b) => a.age-b.age)));
// 	return people.sort((a,b) => a.age-b.age);
// }
// OrderPeople(people);


//CALCULATE TYPE OF TRIANGLE GIVEN SIDES A,B,C
// var triangles = {
// 	none: 0,
// 	acute: 1,
// 	right: 2,
// 	obtuse: 3
// }

// function triangleType(a, b, c){
// 	var angleA = ((b*b)+(c*c)-(a*a))/(2*b*c);
// 	angleA = Math.acos(angleA) * 180/Math.PI;
// 	angleA = Math.round(angleA);
// 	console.log(angleA);

// 	var angleB = ((c*c)+(a*a)-(b*b))/(2*a*c);
// 	angleB = Math.acos(angleB) * 180/Math.PI;
// 	angleB = Math.round(angleB);
// 	console.log(angleB);
// 	var angleC = 180 - angleA - angleB;

// 	angleC = Math.round(angleC);
// 	console.log(angleC);

// 	var total = angleA + angleB + angleC;
// 	console.log(total);

// 	if (angleA < 90 && angleB < 90 && angleC < 90) {
// 		console.log(triangles.acute);
// 		return triangles.acute;
// 	} else if (angleA == 90 && total < 181 || angleB == 90 && total < 181 || angleC == 90 && total < 181) {
// 		console.log(triangles.right);
// 		return triangles.right;
// 	} else if (angleA > 90 && angleA < 180 && total < 181 || angleB > 90 && angleB < 180 && total < 181 || angleC > 90 && angleC < 180 && total < 181) {
// 		console.log(triangles.obtuse);
// 		return triangles.obtuse;
// 	} else {
// 		console.log(triangles.none);
// 		return triangles.none;
// 	}
// }

// triangleType(1,2,3);


// Each word in the String will contain a single number. This number is the position the word should have in the result.
// function order(words){
// 	var reordered = [];
// 	words = words.split(' ');

// 	if (words == '' || null) {
// 		console.log('empty sting');
// 		return ''
// 	} else {

// 		for (var i = 0; i < words.length; i++) {
// 			var index = words[i].match(/[0-9]/gi);
// 			index = index[0]-1;
// 			reordered[index] = words[i];
// 		}
// 		console.log(reordered.toString().replace(/,/g , " "));
// 		return reordered.toString().replace(/,/g , " ")
// 	}
// };

// order("4of Fo1r pe6ople g3ood th5e the2");








