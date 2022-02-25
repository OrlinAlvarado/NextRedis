import Head from 'next/head';
import Layout from '../../components/layout';
import { getUsers } from '../../lib/users';

export async function getServerSideProps(context) {
    const users = await getUsers()
    return {
        props: {
            users
        }
    }
}
  
export default function Posts({ users }) {

  return (
    <Layout>
        <Head>
            <title>Users</title>
        </Head>
        <h1>Users</h1>
        <hr />
        
        <ul className="list-group">
            {users.map((user) => (
                <li className="list-group-item" key={ user.id }>
                    { user.name } { user.username }
                </li>
                
            ))
                
            }
        </ul>
        
        
    </Layout>
  )
}

