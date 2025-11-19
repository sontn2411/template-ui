import './App.css'
import { mainTako } from './assets'

function App() {
  return (
    <div>
      <div
        className='w-[138px] h-[151px] bg-no-repeat tako-animate '
        style={{
          backgroundImage: `url(${mainTako})`,
        }}
      ></div>
    </div>
  )
}

export default App
