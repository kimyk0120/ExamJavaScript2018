
console.log("blockChainRunTestWithSha256.js file called");

//blockchain.js 모듈을 이곳에서 가져다 쓰겠다.
const Blockchain = require('./blockchain');

//위에서 가져온 모듈의 객체를 만든다.
const bitcoin = new Blockchain();

const previousBlockHash = "abcdedferefa"
const currentBlockData = [
	{
		amount: 10,
		sender: 'PACKadffaaf',
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


//859096659fb3a8b0f053eb068c4b11ee24ba38fecaf6ea629ff301d14feeae84









//endDOm

