import JackpotTable from '@/components/JackpotTable'
import Subheader from '@/components/Subheader'
import Head from 'next/head'

const Jackpot = () => {
  return (
    <>
      <div>
        <Head>
          <title>Dapp Lottery - Jackpot</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='bg-gradient-to-r from-purple-500 to-blue-500"'>
          <Subheader />
        </div>

        <div>
          {' '}
          <JackpotTable />{' '}
        </div>
      </div>
      <div></div>
    </>
  )
}

export default Jackpot
