import React from 'react';
import { usePagination } from '../../../hooks/usePagination';
import classes from './MyPagination.module.css';

const MyPagination = ({ pagination, changePage }) => {
      const pagesArray = usePagination(pagination.limit);

	return (
            <>
                  <div className={classes.pagination}>
                        {pagesArray.map((page) => 
                              <span 
                                    key={page}
                                    onClick={() => changePage(page)}
                                    className={
                                          pagination.pageIndex === page 
                                                ? [classes.pagination__item, classes.active].join(' ') 
                                                : classes.pagination__item
                                    } 
                                    style={{marginRight: '6px'}}
                              >
                                    {page}
                              </span>
                        )}
                  </div> 
            </>
	);
};

export default MyPagination;