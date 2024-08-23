import Moralis from 'moralis';

try {
  await Moralis.start({
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjcxOGQ2MzNjLTc3YmUtNDBkMi1iYjQzLTM2ZTM4MGEyNWI1YiIsIm9yZ0lkIjoiMzU1NDc5IiwidXNlcklkIjoiMzY1MzYxIiwidHlwZUlkIjoiYzM2ZWQ2YWYtOWY0OS00YTExLWI0YWQtNDAzMjljNjJlOTNkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTM1NTI2NjQsImV4cCI6NDg0OTMxMjY2NH0.qbLFb1G9bC9wE3kHopP29P5Bww23RjcEmmT3-R5TkQ0"
  });

  const response = await Moralis.EvmApi.events.getContractEvents({
    "chain": "0x38",
    "topic": "0x859075d4415aa2fc7a6ce477c898ca2e80345bef8e1ce25492818664bb79db67",
    "order": "DESC",
    "address": "0xa7e0Da15B8bC1070C340F52c2bb7136a9b653455",
    "abi": {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "buyer",
          "type": "address",
          "internal_type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256",
          "internal_type": "uint256"
        },
        {
          "indexed": false,
          "name": "paidAmount",
          "type": "uint256",
          "internal_type": "uint256"
        },
        {
          "indexed": false,
          "name": "phase",
          "type": "uint8",
          "internal_type": "enum DIGTokenPresale.PresalePhase"
        }
      ],
      "name": "TokensPurchasedBnb",
      "type": "event"
    }
  });
 // Log the entire response
 console.log(JSON.stringify(response.raw, null, 2));
} catch (e) {
  console.error(e);
}