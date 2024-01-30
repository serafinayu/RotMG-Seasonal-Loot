function wakeUp() {
	return new Promise ((resolve, reject) => {
		resolve("You woke up");
	});
}

function brushTeeth() {
	return new Promise((resolve, reject) => {
		resolve("You brushed your teeth");
	});
}

wakeUp().then(value => {
    console.log(value);
    return brushTeeth();
})