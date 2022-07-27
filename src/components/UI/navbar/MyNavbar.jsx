import React, { useContext } from 'react';
import classes from './MyNavbar.module.css';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const MyNavbar = () => {
      const { isAuth, setIsAuth } = useContext(AuthContext);

      const logout = () => {
            setIsAuth(false);
            localStorage.removeItem('auth');
      }

      return (
            <>
                  <div className={classes.navbar}>
                        <div style={{fontSize: '18px'}}>
                              My Test App
                        </div>
                        <div className={classes.navbar__links}>
                              { 
                                    isAuth &&
                                    <>
                                          <Link className={classes.navbar__link} to="/about">О сайте</Link>
                                          <Link className={classes.navbar__link}to="/posts">Посты</Link>
                                          <MyButton onClick={() => logout()}>Выйти</MyButton>
                                    </>
                              }
                        </div>
                  </div>
            </>
      )
}

export default MyNavbar