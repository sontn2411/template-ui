import Image from 'next/image'
import logo from '@/assets/logo.png'

const data = [
  {
    id: 1,
    name: 'Home',
  },
  {
    id: 2,
    name: 'About',
  },
  {
    id: 3,
    name: 'Rooms',
  },
  {
    id: 4,
    name: 'Booking',
  },
  {
    id: 5,
    name: 'Offers',
  },
  {
    id: 6,
    name: 'Blog',
  },
  {
    id: 7,
    name: 'Gallery',
  },
  {
    id: 8,
    name: 'Contact',
  },
]

const Header = () => {
  return (
    <div className=' absolute w-full  z-20  '>
      <div className='py-4 px-6 flex justify-between items-center  '>
        <div>
          <Image src={logo} alt='Logo' />
        </div>
        <div className='hidden md:block'>
          <ul className='flex gap-6 '>
            {data.map((item) => {
              return (
                <li key={item.id} className=''>
                  {item.name}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='hidden md:block'>
          <button className=' bg-color-1 uppercase font-medium  tracking-[2px] py-2 px-4'>
            Booking
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
