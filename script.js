function decimalToBinary(num) {
  //Write you code here
	const binDig = [];
	do {
		binDig.push(num%2);
		// console.log(num)
		num = Math.floor(num/2);
		// console.log(num)
		if(num < 2) binDig.push(num)
	} while (num >= 2)

	let revArr = binDig.reverse()
	let res = revArr.join('')
	res = Number(res)
	console.log(res)
	
  
}


window.decimalToBinary = decimalToBinary;
