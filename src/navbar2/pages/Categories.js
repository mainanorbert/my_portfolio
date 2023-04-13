import React from 'react'

const Categories = () => {
    return (

        <div className=''>
            <div className='text-center  font-bold text-2xl'>Filters</div>
            <ul className='px-1 grid gap-2 list-disc text-blue-600 mt-5'>
                <p className='text-green-700 font-bold'>Chose Your Category</p>
                <li className='text-sm'><a href="">Artificial Intelligence</a></li>
                <li className='text-sm'><a href="">Web Development</a></li>
                <li className='text-sm'><a href="">Technology-Entreprenuer</a></li>
                <li className='text-sm'><a href="">Artificial Articles</a></li>
                <li className='text-sm'><a href="">Tech Motivational Articles</a></li>



            </ul>
        </div>
    )
}

export default Categories