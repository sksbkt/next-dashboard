import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Dashboard from '@/pages/dashboard'
import SideMenu from '@/components/sideMenu'
import { useSession } from 'next-auth/react'
import Login from '@/components/login'


export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Data dashboard</title>
        <meta name="description" content="Data dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} `}>
        <Header />

        {
          session &&
          <>
            <SideMenu />
            <Dashboard />
            <Login />
          </>
        }
      </main>
    </>
  )
}
