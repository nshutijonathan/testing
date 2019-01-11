const reverseString=(input)=>{
	if(typeof input!=='string') return 'Invalid input';
	 return input.split('').reverse().join('');
	 }

	
const sum=(...input)=>{
	const sum=input.reduce((total,value)=>total+=value,0)
	return sum;

}
module.exports={
	reverseString,
	sum,
	
}