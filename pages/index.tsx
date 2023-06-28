import Head from 'next/head'
import Header from '@/components/Header'
import Jackpots from '@/components/Jackpots'
import { generateLotteries } from '@/Services/FakeData'



export default function Home({ jackpots }: any) {
  // const data = jackpots
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Jackpots jackpots={jackpots} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = generateLotteries(8)
  return {
    props: {
      jackpots: JSON.parse(JSON.stringify(data)),
    },
  }
}
