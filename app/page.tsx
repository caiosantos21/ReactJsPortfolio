import { Header } from '@components/header'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Teste</title>
      </Head>

      <main>
        <Header />
      </main>
    </>
  )
}
