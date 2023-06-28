const generateLottery = (id: any) => {
  const expiresIn = getRandomInt(7, 30)
  const expiresAt = new Date(Date.now() + expiresIn * 24 * 60 * 60 * 1000).getTime()

  return {
    id,
    title: `Lottery ${id}`,
    description: `This is the ${ordinalSuffix(id)} lottery`,
    owner: generateRandomEthereumAddress(),
    prize: getRandomFloat(10, 100).toFixed(2),
    ticketPrice: getRandomFloat(0.01, 0.1).toFixed(2),
    drawsAt: getRandomTimestamp(new Date('2022-01-01').getTime(), new Date('2022-12-31').getTime()),
    createdAt: getRandomTimestamp(
      new Date('2022-01-01').getTime(),
      new Date('2022-12-31').getTime()
    ),

    expiresAt,
    participants: getRandomInt(10, 100),
    drawn: false,
  }
}

const generateLotteries = (n: any) => {
  const lotteries = []
  for (let i = 1; i <= n; i++) {
    const id = i.toString()
    const title = `Lottery ${id}`
    const description = `This is the ${i} lottery`
    const owner = generateRandomEthereumAddress()
    const prize = getRandomFloat(10, 100).toFixed(2)
    const ticketPrice = getRandomFloat(0.01, 0.1).toFixed(2)
    // const image = ``
    const createdAt = getRandomTimestamp(
      new Date('2022-01-01').getTime(),
      new Date('2022-12-31').getTime()
    )
    const drawsAt = getRandomTimestamp(
      new Date('2022-01-01').getTime(),
      new Date('2022-12-31').getTime()
    )
    const expiresIn = getRandomInt(7, 30)
    const expireAt = new Date(Date.now() + expiresIn * 24 * 60 * 60 * 1000).getTime()
    const participants = getRandomInt(10, 100)
    const drawn = false

    lotteries.push({
      id,
      title,
      description,
      owner,
      prize,
      ticketPrice,
      // image,
      createdAt,
      expireAt,
      participants,
      drawn,
      expiresIn,
      drawsAt,
    })
  }

  return lotteries
}

//to generate random ethereum addresses
function generateRandomEthereumAddress() {
  const hexChars = '0123456789abcdef'
  let address = '0x'
  for (let i = 0; i < 40; i++) {
    address += hexChars.charAt(Math.floor(Math.random() * hexChars.length))
  }
  return address
}

function getRandomFloat(min: any, max: any) {
  return Math.random() * (max - min) + min
}

function getRandomTimestamp(min: any, max: any) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomInt(min: any, max: any) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export { generateLotteries,  generateLottery }
