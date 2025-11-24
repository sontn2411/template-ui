import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/Index'
import PageDesignAssets from './pages/DesignAssets'
import RootLayout from './components/layout/RootLayout'
import PageDemo from './pages/Demo'

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/design-assets' element={<PageDesignAssets />} />
        </Route>
        <Route path='/demo' element={<PageDemo />} />
      </Routes>
    </>
  )
}

export default App
