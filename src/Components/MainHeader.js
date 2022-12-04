import { Link, NavLink } from 'react-router-dom';
import logo from "../static/vistalogo.png"
import classes from './MainHeader.module.css';
import {useHistory} from "react-router-dom"
const MainHeader = () => {
  const history = useHistory()
  const handle = ()=> {
    history.push("/")
  }
  return (
    <header className={classes.header}>
      <div className={classes['nav-container']}>
      <button onClick={handle}><img style={{width:"13vw",height:"5rem"}} src={logo} alt="" /></button>
      <div className={classes['link-container']}>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/solutions'>Solutions</NavLink>
          </li>
        </ul>
      </nav>
      </div>
      </div>
    </header>
  );
};

export default MainHeader;