function calcInsAustria(age,horse_power) {

	return Math.floor(Number(horse_power * 100 / age + 50));
};

function calcInsHungary(age,horse_power) {

	return Math.floor(Number(horse_power * 120 / age + 100));
};

function calcInsGreece(age,horse_power) {

	return Math.floor(Number(horse_power * 150 / (age + 3) + 50));
};


function calcMycurrentage(currentyear,birthyear) {
	a =currentyear - birthyear;

	return a;
};





