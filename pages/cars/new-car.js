import Head from 'next/head';
import CarForm from '../../lib/CarForm'
import Layout from '../../components/layout';

export default function Home() {
  return (
    <Layout>
        <Head>
          <title>Using REDIS</title>
        </Head>
        <h2>Adding new car</h2>
        <hr />
        <CarForm />  
      </Layout>
    
  )
}
