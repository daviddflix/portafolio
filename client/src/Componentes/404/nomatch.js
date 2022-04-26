import { Nav } from '../barra/barra'
import s from './nomatch.module.css'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom';

export default function NoMatch(){

    const history = useHistory()

  const handleButtonPress = () => {
      history.push('/home')
  }

    return(
        <div className={s.nomatch}>
            <Nav/>
            <h1 style={{fontSize: '6rem'}}>404</h1>
            <h3>Page not found</h3>
            <Button
            variant='contained'
            color='primary'
            onClick={handleButtonPress}>
            Back Home
            </Button>
        </div>
    )
}