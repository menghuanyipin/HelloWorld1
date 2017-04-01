function person(){
	var name = "zhangsan";
	var age = 22;
	this.birthday = function(){
		console.log('happy birthday!');
	}
}
module.exports = person;