import Moralis from 'moralis';

try {
  await Moralis.start({
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjcxOGQ2MzNjLTc3YmUtNDBkMi1iYjQzLTM2ZTM4MGEyNWI1YiIsIm9yZ0lkIjoiMzU1NDc5IiwidXNlcklkIjoiMzY1MzYxIiwidHlwZUlkIjoiYzM2ZWQ2YWYtOWY0OS00YTExLWI0YWQtNDAzMjljNjJlOTNkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTM1NTI2NjQsImV4cCI6NDg0OTMxMjY2NH0.qbLFb1G9bC9wE3kHopP29P5Bww23RjcEmmT3-R5TkQ0"
  });

  const response = await Moralis.EvmApi.events.getContractEvents({
    "chain": "0x38",
    "topic": "0xa5d90d0a4d1bea71687253f52b15b36b2810cdc678468d7cea83b3f202be8dd2",
    "order": "DESC",
    "fromBlock": 40956687,
    "address": "0xa7e0Da15B8bC1070C340F52c2bb7136a9b653455",
    "abi":{
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "paidAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "enum DIGTokenPresale.PresalePhase",
                "name": "phase",
                "type": "uint8"
            }
        ],
        "name": "TokensPurchasedUsdt",
        "type": "event"
    }
  });
 // Log the entire response
 console.log(JSON.stringify(response.raw, null, 2));
} catch (e) {
  console.error(e);
}