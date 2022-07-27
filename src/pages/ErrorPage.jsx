import React from 'react';
import '../styles/ErrorPage.css';

const ErrorPage = () => {
      return (
            <>
                  <div className="error_page__container">
                        <h1 className="error_page__error-number" >404</h1>
                        <h3 className="error_page__error-desc">Oops! Page not found</h3>
                        <p>The page you requested could not be found</p>
                  </div>
            </>
      )
}

export default ErrorPage