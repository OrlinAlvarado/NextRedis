import Head from 'next/head';
import SearchForm from '../../lib/SearchForm'
import Layout from '../../components/layout'

export default function Search() {
    return (
      <Layout>
        <Head>
          <title>Search using REDIS</title>
        </Head>
        <h2>Search from redis</h2>
        <hr />
        <SearchForm />
      </Layout>
      
    )
  }