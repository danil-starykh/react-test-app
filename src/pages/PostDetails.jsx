import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostsService';
import '../styles/PostDetailsPage.css';
import Loader from '../components/UI/loader/Loader';
import MyComment from '../components/UI/comment/MyComment';

const PostDetails = () => {
      const params = useParams();
      const [fetchPostById, isPostLoading] = useFetching( async (postId) => {
            const response = await PostService.getPostById(postId);
            setPostDetails(response.data);
            
      });
      const [fetchPostCommentsById, isCommentsLoading] = useFetching( async (postId) => {
            const response = await PostService.getPostCommentsById(postId);
            setPostComments(response.data);
            console.log(response.data);
      });
      const [postDetails, setPostDetails] = useState({});
      const [postComments, setPostComments] = useState([]);

      useEffect(() => {
            fetchPostById(params.id);
            fetchPostCommentsById(params.id)
      }, [])
      

      return (
            <>
                  <div className="post_details__container">
                        {
                              isPostLoading 
                              ? <Loader loaderTitle={'Идёт загрузка поста...'} />
                              : <>
                                    <div className="post_details__title"><h1>{postDetails.id}. {postDetails.title}</h1> </div>
                                    <p className="post_details__description">{postDetails.body}</p>
                                    <p style={{marginTop: '20px'}}>Comments</p>
                                    {
                                          isCommentsLoading 
                                          ? <Loader loaderTitle={'Идёт загрузка комментариев...'} />
                                          : <div className="post_details__comments">
                                                {
                                                      postComments.map((comment => 
                                                            <MyComment key={comment.id} commentData={comment}/>
                                                      ))
                                                }
                                          </div>
                                    }
                              </>
                        }
                  </div>
            </>
      )
}

export default PostDetails