/**
 * http://usejsdoc.org/
 * 출처: http://abc1211.tistory.com/517?category=1003529 [길위의 개발자]
 * 

1.거래가 발생하면 트랜잭션 데이터가 생긴다.

2.이 데이터는 아직 신뢰할 수 없다.

3.어떻게 해야하나? -> 채굴자들이 마이닝을 해서 새로운 블락을 생성해야 한다.

4.새로운 블락이 생성되었다.

5.이전 트랜잭션 데이터는 새로운 블락에 쓰여지면서 신뢰할 수 있게된다.

 * 
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

//console.log("\n");
//console.log(bitcoin);
/*
 * Blockchain {
  chain: 
   [ { index: 1,
       timestamp: 1532399931219,
       transactions: [],
       nonce: 1111,
       hash: '1a1a1a1a1a1a',
       previousBlockHash: 'aaaaaaa' } ],
  pendingTransaction: [] }
 */


//새로은 트랜잭션 생성 - (총금액, 보내는이, 받는이)
bitcoin.createNewTransaction(100,'PACKadffaaf','HONGllalflks')

//console.log("\n");
//console.log(bitcoin);
/*
 * 
Blockchain {
  chain: 
   [ { index: 1,
       timestamp: 1532399931219,
       transactions: [],
       nonce: 1111,
       hash: '1a1a1a1a1a1a',
       previousBlockHash: 'aaaaaaa' } ],
  pendingTransaction: [ { amount: 100, sender: 'PACKadffaaf', recipient: 'HONGllalflks' } ] }

 */


//새로운 블락 생성 - 채굴후 얻은 블락
bitcoin.createNewBlock(2222,"bbbbbbb","2b2b2b2b2b2b");

//console.log("\n");
//console.log(bitcoin);
/*
 * Blockchain {
  chain: 
   [ { index: 1,
       timestamp: 1532399931219,
       transactions: [],
       nonce: 1111,
       hash: '1a1a1a1a1a1a',
       previousBlockHash: 'aaaaaaa' },
     { index: 2,
       timestamp: 1532399931234,
       transactions: [Object],
       nonce: 2222,
       hash: '2b2b2b2b2b2b',
       previousBlockHash: 'bbbbbbb' } ],
  pendingTransaction: [] }
 */

//console.log("\n");
//console.log(bitcoin.chain[1])
/*
 * { index: 2,
  timestamp: 1532399931234,
  transactions: [ { amount: 100, sender: 'PACKadffaaf', recipient: 'HONGllalflks' } ],
  nonce: 2222,
  hash: '2b2b2b2b2b2b',
  previousBlockHash: 'bbbbbbb' }
 */

//새로은 트랜잭션 생성2 - (총금액, 보내는이, 받는이)
bitcoin.createNewTransaction(777,'PACKadffaaf','HONGllalflks')
//새로은 트랜잭션 생성3 - (총금액, 보내는이, 받는이)
bitcoin.createNewTransaction(888,'PACKadffaaf','HONGllalflks')
//새로은 트랜잭션 생성4. - (총금액, 보내는이, 받는이)
bitcoin.createNewTransaction(999,'PACKadffaaf','HONGllalflks')

//새로운 블락 만들기
bitcoin.createNewBlock(3333,"ccccccc","3c3c3c3c3c3c");


//console.log("\n");
//console.log(bitcoin);
/*
 * Blockchain {
  chain: 
   [ { index: 1,
       timestamp: 1532399931219,
       transactions: [],
       nonce: 1111,
       hash: '1a1a1a1a1a1a',
       previousBlockHash: 'aaaaaaa' },
     { index: 2,
       timestamp: 1532399931234,
       transactions: [Object],
       nonce: 2222,
       hash: '2b2b2b2b2b2b',
       previousBlockHash: 'bbbbbbb' },
     { index: 3,
       timestamp: 1532399931235,
       transactions: [Object],
       nonce: 3333,
       hash: '3c3c3c3c3c3c',
       previousBlockHash: 'ccccccc' } ],
  pendingTransaction: [] }
 */
//console.log("\n");
//console.log(bitcoin.chain[2])
/*
 * { index: 3,
  timestamp: 1532399931235,
  transactions: 
   [ { amount: 777, sender: 'PACKadffaaf', recipient: 'HONGllalflks' },
     { amount: 888, sender: 'PACKadffaaf', recipient: 'HONGllalflks' },
     { amount: 999, sender: 'PACKadffaaf', recipient: 'HONGllalflks' } ],
  nonce: 3333,
  hash: '3c3c3c3c3c3c',
  previousBlockHash: 'ccccccc' }
 */


// test
//var hash = bitcoin.hashBlock("sss",null,"aaa");
//console.log(hash);



























//endDOm

