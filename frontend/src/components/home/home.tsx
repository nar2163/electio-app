import React from 'react'
import RotatingLogo from '../rotating-logo/rotating-logo'
import ElectioLogoMain from '../../assets/ElectioLogo-NoText.svg'
import './home.css'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="App">
      <header className="App-header">
        <RotatingLogo imageSrc={ElectioLogoMain} />
        <br></br>
        <Button variant="outlined" onClick={() => navigate('/mainPage')}>
          enter electio
        </Button>
      </header>
    </div>
  )
}

export default Home
