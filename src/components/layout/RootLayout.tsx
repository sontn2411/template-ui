import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const RootLayout = () => {
  return (
    <div className='flex  text-white w-full'>
      <Navbar />
      <div className='w-full p-4'>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
