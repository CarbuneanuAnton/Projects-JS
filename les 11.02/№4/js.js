var arr = [1,2,5,6,8];
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(sum);
}
arraySum(arr);

const sum = [4, 2, 3, 7, 9].reduce((partial_sum, a) => partial_sum + a,0); 
console.log(sum);



function average(items) {
  var sum = 0;
  var count = items.length;
  for (i=0; i<count; i++) {
    sum += items[i];
  }
  return sum/count;
}

let calculateAverage = (marks) => {
	let sum = 0;
	let average = 0;
	for (let mark of marks){
		sum += mark;
	}
	average = sum / marks.length;
	console.log(average.toFixed(3));
}


sumOfNumbers ([1, 5, 12, 45, 10]);
calculateAverage([6, 8, 7, 9, 8]);
markMinFive([5, 4, 6, 8, 9, 7])*/
console.log(average([6, 8, 7, 9, 8]));