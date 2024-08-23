import { keccak256, toUtf8Bytes } from 'ethers';

// Event signature as a string
const eventSignature = "TokensPurchasedUsdt(address,uint256,uint256,uint8)";

// Generate the Keccak-256 hash
const topic = keccak256(toUtf8Bytes(eventSignature));

console.log('Event Topic:', topic);
