import { NavLink } from 'react-router-dom'
import IconUi, { type IconName } from '../shared/IconUi'

const navLinks = [
  {
    id: 1,
    name: 'Home',
    to: '/',
    icon: 'home',
  },
  {
    id: 2,
    name: 'Design Assets',
    to: '/design-assets',
    icon: 'svg',
  },
]

const Navbar = () => {
  return (
    <div className='w-1/6 bg-color-3 h-screen'>
      <div className='flex gap-4  items-center p-4'>
        <div className='bg-color-2 p-2 rounded-md'>
          <div className='w-6 h-6 text-color-1'>
            <IconUi name='dashboard' />
          </div>
        </div>
        <div>
          <p className='font-semibold'>Component Hub</p>
          <p className='text-xs text-gray-400'>By Coder</p>
        </div>
      </div>

      <div className='mt-8 flex flex-col'>
        {navLinks.map((item) => {
          return (
            <NavLink
              to={item.to}
              key={item.id}
              className={({ isActive }) =>
                `flex items-center  gap-3 p-2 ${
                  isActive ? 'bg-color-2 text-color-1' : ''
                }`
              }
            >
              <div className='p-2 rounded-md'>
                <div className='w-5 h-5 '>
                  <IconUi name={item.icon as IconName} />
                </div>
              </div>
              <span className='text-sm font-semibold'>{item.name}</span>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
