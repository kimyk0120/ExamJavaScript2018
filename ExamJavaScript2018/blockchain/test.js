/**
 * http://usejsdoc.org/
 */

console.log("test file called");


function User(name,age){
	this.name = name;
	this.age = age;
}
User.prototype.emailDomain = "@google.co.kr";
User.prototype.getEmailAddress = function(){
	return this.name + this.age + this.emailDomain;
}


var user1 = new User('길위의 개발자', '30');
var user50000 = new User('스티브잡스', '31');
//console.log(user1.getEmailAddress());