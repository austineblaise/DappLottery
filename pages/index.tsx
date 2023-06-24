import Head from 'next/head'
import Header from '@/components/Header'
import Jackpots from '@/components/Jackpots'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />
    <Jackpots />
    </div>
  )
}
