import { useState } from 'react'
import Image from 'next/image'

export default function CarForm() {
    const [hits, setHits] = useState([]);
    
    const search = async (event) => {
        const q = event.target.value ;
        
        if(q.length > 2){
            const params = new URLSearchParams({ q });
            
            const res = await fetch('/api/cars/search?' + params)
            
            const result = await res.json();
            
            console.log(result);
            
            setHits(result['cars']);
        }
    }
    return (
        <div>
            <input type="text"
                className="form-control"
                id="search"
                name="search"
                placeholder="Search" 
                onChange={ search }
            />
            
            <ul className="list-group">
                {hits.map((hit) => (
                    <li className="list-group-item" key={ hit.entityId }>
                      { hit.image &&
                        <Image 
                          src={ hit.image } 
                          alt={ hit.model } 
                          width={ 50 }
                          height={ 50 }
                          /> 
                      }  
                       
                        { hit.make } { hit.model }
                    </li>
                    
                ))
                    
                }
            </ul>
        </div>
    )
}