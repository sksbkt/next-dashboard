import Dashboard from '@/pages/dashboard';
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