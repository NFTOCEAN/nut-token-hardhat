import { ethers } from "hardhat";

async function main() {
 
  const NUT_ERC20 = await ethers.deployContract("NUTERC20", [ethers.parseEther('100000000000')]);
  await NUT_ERC20.waitForDeployment();
  const NUT_ADDR = await NUT_ERC20.getAddress();
  console.log('NUT deployed: ');
  console.log(NUT_ADDR);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
