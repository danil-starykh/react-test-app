import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routes';
import { AuthContext } from '../context'

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      {
        isAuth
          ? <Routes>
            {
              privateRoutes.map(route => {
                return <Route key={route.path} path={route.path} element={<route.element />} />
              })
            }
            <Route path='/login' element={<Navigate to='/posts' replace />} />
            <Route path='*' element={<Navigate to='/page-not-found' replace />} />
          </Routes>
          : <Routes>
            {
              publicRoutes.map(route => {
                return <Route key={route.path} path={route.path} element={<route.element />} />
              })
            }
            <Route path='*' element={<Navigate to='/login' replace />} />
          </Routes>
      }
    </>
  )
}

export default AppRouter