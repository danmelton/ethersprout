const SampleToken = artifacts.require('SampleToken')

contract('SampleToken', (accounts) => {
  it('should put 10000 SampleToken in the first account', async () => {
    const token = await SampleToken.deployed()
    const balance = await token.balanceOf.call(accounts[0])
    assert.equal(balance.valueOf(), 10000, '10000 is in the first account')
  })
  it('first account should be able to transfer to others', async () => {
    const token = await SampleToken.deployed()
    const balance = await token.balanceOf.call(accounts[0])
    assert.equal(balance.valueOf(), 10000, '10000 is in the first account')
    await token.transfer()
  })
})
