// grab the elements
let secondHand = document.getElementById('second');
let minuteHand = document.getElementById('minute');
let hourHand = document.getElementById('hour');

// rotate the hands
function rotate() {
	let now = new Date();

	// Get the hours, minutes, and seconds
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();

	// Rotation fraction for each hand
	// Adding secondsRotation to the minutes and minutesRotation to hours
	// for a gradual movement of the hands
	let secondsRotation = seconds / 60;
	let minutesRotation = (secondsRotation + minutes) / 60;
	let hoursRoation = (minutesRotation + hours) / 12;

	// Degrees to rotate for each hand
	const secondsRotate = secondsRotation * 360;
	const minutesRotate = minutesRotation * 360;
	const hoursRotate = hoursRoation * 360;

	// Aplly rotate style
	secondHand.style.transform = `rotate(${secondsRotate}deg)`;
	minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
	hourHand.style.transform = `rotate(${hoursRotate}deg)`;
}

// Call the rotate function every 1 second
setInterval(rotate, 1000);
