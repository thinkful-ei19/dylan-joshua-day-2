const turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
function countSteps(arr){
	if(arr[0] >=0 && arr[1]>=0){
		return arr;
	}
}

console.log(turtleSteps.filter(countSteps)); 

function totalSteps(arr){
	return Math.abs(arr[0])+Math.abs(arr[1]);
}
let total=0;
const mapArray = turtleSteps.map(totalSteps);
for(let i=0;i<mapArray.length;i++){
	total += mapArray[i];
}
console.log(total);

function busyTurtle(arr){
	console.log(Math.abs(arr[0])+Math.abs(arr[1]));
}

turtleSteps.forEach(busyTurtle);