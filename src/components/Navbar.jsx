import React from 'react'

function Navbar() {
  return (
    <nav className='bg-slate-800 text-white '>
        <div className="mycontainer flex justify-between items-center px-4 h-14 py-6">

        <div className="logo font-bold text-2xl">
          <span className='text-green-500'>  &lt;</span>
            Pass
            <span className='text-green-500'>OP/ &gt;</span>
            </div>
      {/* <ul>
        <li className='gap-4 flex'>
        <a className='hover:font-bold' href="/">Home</a>
        <a className='hover:font-bold' href="#">About</a>
        <a className='hover:font-bold' href="#">Contact</a>
        </li>
      </ul> */}
      <div>
        <button className='my-5 rounded-md bg-green-500 flex  justify-center items-center'>
        <img src="./public/GitHub.png" alt="" className='w-10 p-1  ' />
      <span className='font-bold px-4'> GitHub</span>
          </button>
      </div>
        </div>
    </nav>
  )
}

export default Navbar
