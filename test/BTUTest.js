const { contract } = require('@openzeppelin/test-environment');
const { BN } = require('@openzeppelin/test-helpers');
//const BigNumber = require('bignumber.js');

const { expect } = require('chai');

const ERC20DetailedMock = contract.fromArtifact('BTU');

describe('BTU protocol test', function () {
  const _name = "BTU Protocol";
  const _symbol = "BTU";
  const _decimals = new BN(18);
  const _INITIAL_SUPPLY = 100000000 * 10 ** 18;

  beforeEach(async function () {
    this.detailedERC20 = await ERC20DetailedMock.new();
  });

  it('...has a name', async function () {
    expect(await this.detailedERC20.name()).to.equal(_name);
  });

  it('...has a symbol', async function () {
    expect(await this.detailedERC20.symbol()).to.equal(_symbol);
  });

  it('...has an amount of decimals', async function () {
    expect(await this.detailedERC20.decimals()).to.be.bignumber.equal(_decimals);
  });
});
