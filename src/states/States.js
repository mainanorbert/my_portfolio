import React from 'react'
import { useState } from 'react';

const States = () => {
    let nxtIndex;

    const[name,setName]=useState('');
    const[artists,setArtists]=useState([]);

    return (
        <div>

        <input value={name} onChange={e=>setName(e.target.value)} />

        <button onClick={()=>{
            setName('');
            setArtists([...artists,{id:nxtIndex++,name:name}])
        }}>Add</button>
<ul>
{artists.map((artist)=>(
    <li key={artist.id}>{artist.name}</li>
))}
</ul>
        </div>
    )
}

export default States