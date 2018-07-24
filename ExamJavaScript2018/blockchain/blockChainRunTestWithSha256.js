
/*
 * POW : Proof of Work
 * 
 * 해쉬: 해쉬는 의미없는 데이터다. 컴퓨터에서 블럭의 길이를 맞추기 위해서 메모리에 작성된 의미없는 데이터다.

예)0000asdkflqwjkeljakldjflaj;

블럭: 해쉬를 가지고 있는 사람이 코인을 획득할 수 있는 블록을 의미

난이도: 블럭이 생성되는 시간을 일정하게 조정하기 위해 사용되는 개념

(전체 해쉬의 양 증가 -> 난이도 증가-> 블럭찾는데 더 많은 해쉬 필요 _> 블럭 생성시간 유지됨)

51% 공격: 전체 해쉬의 51% 이상 가진 집단이 존재할때 전체 코인의 이동정보, 즉 블록체인에 잘못된 정보가 전달 될 수 있다는 개념

pow: 컴퓨터간에 정보를 교환할때 통신방법에 대한 규칙이다. 많은 해쉬를 가진 사람이 코인을 획득할 수 있는 블럭을 더 많이 발견할 수 있는 시스템이다.


출처: http://abc1211.tistory.com/522?category=1003529 [길위의 개발자]
 */


console.log("blockChainRunTestWithSha256.js file called");

//blockchain.js 모듈을 이곳에서 가져다 쓰겠다.
const Blockchain = require('./blockchain');

//위에서 가져온 모듈의 객체를 만든다.
const bitcoin = new Blockchain();

const previousBlockHash = "abcdedferefa"
const currentBlockData = [
	{
		amount: 10,
		sender: 'BACKadffaaf',
		recipient: 'HONGllalflks'
	},
	{
		amount: 20,
		sender: 'PACKadffaaf',
		recipient: 'HONGllalflks'
	},
	{
		amount: 30,
		sender: 'PACKadffaaf',
		recipient: 'HONGllalflks'
	}
]

const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce))


//ec90a89a8364d8762ec3d365f2c8c91b1547af493e068009c119356b41f9699b







//endDOm

