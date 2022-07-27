import React from 'react';
import PostItem from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PostList = ({ open, remove, posts, title }) => {
	if (!posts.length) {
		return <h2 style={{ textAlign: 'center', paddingTop: '30px' }}>Посты не найдены</h2>;
	}

	return (
            <>
                  <div style={{ marginBottom: '15px' }}>
                        <h1 style={{ textAlign: 'center' }}>
                              {title}
                        </h1>
                        <TransitionGroup>
                              {posts.map((post, index) =>
                                    <CSSTransition
                                          key={post.id}
                                          timeout={500}
                                          className="post"
                                    >
                                          <PostItem open={open} remove={remove} number={index + 1} post={post} />
                                    </CSSTransition>
                              )}
                        </TransitionGroup>   
		      </div>
            </>
	);
};

export default PostList;
