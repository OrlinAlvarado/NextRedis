import Link from 'next/link';
import CarForm from '../../lib/CarForm'

export default function Home() {
  return (
    <div>
      <h1>Create a Car</h1>
      <CarForm />  
      
      <Link href="/posts/first-post">
        <a>Lee esta pagina</a>
      </Link>
    </div>
    
  )
}
