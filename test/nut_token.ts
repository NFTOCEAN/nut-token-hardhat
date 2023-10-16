import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Lock", function () {
  const initialSupply = 10000
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    // deploying token
    const nut_erc20_contract_file = await ethers.getContractFactory('NUTERC20');
    const nutTokenContract = await nut_erc20_contract_file.deploy(initialSupply)
    return {nutTokenContract, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const {nutTokenContract, owner}  = await loadFixture(deployOneYearLockFixture);

      expect(await nutTokenContract.owner()).to.equal(owner.address);
    });

    it("Should set the right initial Supply of tokens", async function() {
      const {nutTokenContract}  = await loadFixture(deployOneYearLockFixture);
      const totalSupply = await nutTokenContract.totalSupply()
      expect(totalSupply).to.equal(initialSupply);
    })
  });

});
