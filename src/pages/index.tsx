import Head from 'next/head';
import Header from '@/components/Header';
import Dashboard from '@/pages/dashboard';
import SideMenu from '@/components/SideMenu';
import { useSession } from 'next-auth/react';
import Login from '@/components/Login';

import Style from './Home.module.scss'

const Home = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Data dashboard</title>
        <meta name="description" content="Data dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={Style.main}>

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

export default Home;