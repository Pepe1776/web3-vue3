const hre = require('hardhat')

async function main() {
  const [deployer] = await hre.ethers.getSigners()

  console.log('deploying contracts with the account:', deployer.address)
  const WavePortal = await hre.ethers.getContractFactory('WavePortal')
  const wave = await WavePortal.deploy()

  await wave.deployed()

  console.log('wave portal deployed successfully to :', wave.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
