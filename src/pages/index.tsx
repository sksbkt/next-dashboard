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
      <main className={Style.main}>

        {
          session &&
          <>
            {
              session ?
                <Dashboard /> :
                <Login />
            }
          </>
        }
      </main>
    </>
  )
}

export default Home;