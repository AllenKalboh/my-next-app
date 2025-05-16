import React from 'react'

const NavBar = () => {
    return (
        <div>
            <ul className='p-4 justify-between flex bg-[#E5E5E5]' >
                <div>
                    <h2> Logo </h2>
                </div>
                <div className='flex gap-10'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts</li>
                </div>
            </ul>
        </div>
    )
}

export default NavBar
