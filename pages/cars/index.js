import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout'

export default function Home() {
    const [cars, setCars] = useState([]);
    
    const getCars = async (event) => {
            
        const res = await fetch('/api/cars')
        
        const result = await res.json();
        
        
        setCars(result['cars']);
    }
    
    useEffect(() => {
      getCars()
    }, [])
    
    
    
  return (
    <Layout>
      <Head>
        <title>Using Redis</title>
      </Head>
      <h2>Get cars from Redis</h2>
      <hr />
      
      <Link href="/cars/new-car">
        <a className="btn btn-primary m-2">Add new</a>
      </Link>
      <Link href="/cars/search">
        <a className="btn btn-primary">Search</a>
      </Link>
      <ul className="list-group">
            {cars.map((hit) => (
                <li className="list-group-item" key={ hit.entityId }>
                    { hit.make } { hit.model }
                </li>
                
            ))
                
            }
        </ul>
    </Layout>
  )
}