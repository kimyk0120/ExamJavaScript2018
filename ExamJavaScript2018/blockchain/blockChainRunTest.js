/**
 * http://usejsdoc.org/
 * 출처: http://abc1211.tistory.com/517?category=1003529 [길위의 개발자]
 */

console.log("test.js file called");

// prototype test
/*
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
//console.log(user1.getEmailAddress());\
*/


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&




//blockchain.js 모듈을 이곳에서 가져다 쓰겠다.
const Blockchain = require('./blockchain');


//위에서 가져온 모듈의 객체를 만든다.
const bitcoin = new Blockchain();



//새로운 블락 만들기
bitcoin.createNewBlock(1111,"aaaaaaa","1a1a1a1a1a1a");

//새로은 트랜잭션 생성 - (총금액, 보내는이, 받는이)
bitcoin.createNewTransaction(100,'PACKadffaaf','HONGllalflks')





//찍어보기
console.log(bitcoin);























//endDOm

