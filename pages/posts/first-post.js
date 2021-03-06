import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head';
import Layout from '../../components/layout';
// import Script from 'next/script'

export default function FirstPost() {
  return (
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        {/* <Script 
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() => 
                console.log('Script loaded')
            }
        /> */}
        <h1>First Post</h1>
          
        <Image 
            src="/images/profile.jpg"
            height={ 144 }
            width={ 144 }
            alt="Orlin Alvarado"
        />  
        <hr />
        <Link href="/">
            <a className="btn btn-success">Back to home</a>
        </Link>
    </Layout>
  )
}