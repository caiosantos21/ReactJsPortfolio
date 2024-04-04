import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/store')

  return <main className=""></main>
}
