


console.log("blockchain.js file called");



//블록체인 데이터 구조
function Blockchain(){
	this.chain = [];
	this.newTransactions = [];
}


//블록체인 프로토 타입 함수 정의
Blockchain.prototype.createNewBlock = function(nonce,previousBlockHash,hash){
	//새 블록 객체
	const newBlock = {
	index: this.chain.length + 1,
	timestamp: Date.now(),
	transactions: this.newTransactions,
	nonce:nonce,
	hash:hash,
	previousBlockHash:previousBlockHash
};

	//다음 거래를 위한 거래내역 배열 비워주고 새로운 블록을 chin 배열에 추가
	this.newTransactions = [];
	this.chain.push(newBlock);
	
	return newBlock;
}













/**
 * 출처: http://abc1211.tistory.com/516?category=1003529 [길위의 개발자]
 */





