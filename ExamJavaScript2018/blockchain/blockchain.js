/*
 * '블록 하나에  거래내역을 저장한다'
 * 출처: http://abc1211.tistory.com/517?category=1003529 [길위의 개발자]
 */


console.log("blockchain.js file called\n");


//블록체인 데이터 구조
function Blockchain(){
	this.chain = [];
	this.pendingTransaction = [];
}


//블록체인 프로토 타입 함수 정의
Blockchain.prototype.createNewBlock = function(nonce,previousBlockHash,hash){
	//새 블록 객체
	const newBlock = {
		index: this.chain.length + 1,
		timestamp: Date.now(),
		transactions: this.pendingTransaction,
		nonce:nonce,
		hash:hash,
		previousBlockHash:previousBlockHash
	};

	//다음 거래를 위한 거래내역 배열 비워주고 새로운 블록을 chain 배열에 추가
	this.pendingTransaction = [];
	this.chain.push(newBlock);
	
	return newBlock;
}


//마지막 블록 얻기 - chain 배열에는 블록데이터가 들어간다. 맨마지막 블록을 가져와라.
Blockchain.prototype.getLastBlock = function(){
	return this.chain[this.chain.length - 1];
}


//새로운 트랜젝션(거래)가 발생했을 때 작동되는 함수
//인자값으로, 총액수, 보내는사람, 받는사람이 들어간다.
Blockchain.prototype.createNewTransaction = function(amount,sender,recipient){
	const newTransaction = {
		amount: amount,
		sender: sender,
		recipient: recipient
	}

	//맨위 트랜잭션 배열에 값을 넣어준다.
	this.pendingTransaction.push(newTransaction);
	
	//마지막 블록의 index 에서 + 1
	return this.getLastBlock()['index'] + 1
}



//Blockchain 모듈화
module.exports = Blockchain;




