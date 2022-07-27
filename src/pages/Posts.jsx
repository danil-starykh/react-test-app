import React, { useState, useEffect, useRef } from 'react';
import { usePosts } from '../hooks/usePosts';
import PostsService from '../API/PostsService';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pagesCount';
import MyPagination from '../components/UI/pagination/MyPagination';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/modal/MyModal';
import PostFilter from '../components/Post/PostFilter';
import PostForm from '../components/Post/PostForm';
import PostList from '../components/Post/PostList';
import Loader from '../components/UI/loader/Loader';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../components/UI/select/MySelect';


const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', search: '' });
	const [addModalVisible, setAddModalVisible] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);
	const [pagination, setPagination] = useState({
		totalCountOfPages: 0,
		limit: 10,
		pageIndex: 1,
	});
	const [fetchPosts, isPostsLoading] = useFetching(async (limit, pageIndex) => {
		const response = await PostsService.getPosts(limit, pageIndex);
		setPosts([...posts, ...response.data]);
		const totalCount = response.headers['x-total-count'];
		setPagination({ ...pagination, pageIndex: pageIndex, totalCountOfPages: getPageCount(totalCount, limit) });
	});
	const lastElement = useRef();

	useObserver(lastElement, pagination.pageIndex < pagination.totalCountOfPages, isPostsLoading, () => {
		setPagination({...pagination, pageIndex: pagination.pageIndex + 1})
	});

	useEffect(() => {
		fetchPosts(pagination.limit, pagination.pageIndex);
	}, [pagination.pageIndex, pagination.limit]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setAddModalVisible(false);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const changePage = (page) => {
		fetchPosts(pagination.limit, page);
	}

	return (
		<div className='posts_wrapper'>
			<h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
				Posts Page
			</h1>
			<MyButton onClick={() => setAddModalVisible(true)}>Создать пост</MyButton>
			<MyModal visible={addModalVisible} setVisible={setAddModalVisible}>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{ margin: '15px 0' }} />
			<div style={{ display: 'flex', marginBottom: '10px'}}>
				<PostFilter filter={filter} setFilter={setFilter} />
				<MySelect
					value={pagination.limit}
					onOptionSelect={value => setPagination({...pagination, limit: value})}
					defaultValue='Количество постов на странице'
					options={[
						{ value: 5, name: '5' },
						{ value: 10, name: '10' },
						{ value: 25, name: '25' },
						{ value: -1, name: 'Показать все' },
					]}
				/>
			</div>
			{isPostsLoading && <Loader loaderTitle={'Идёт загрузка постов...'} />}
			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title={'Список постов JavaScript'}

			/>
			{
				!!sortedAndSearchedPosts.length && <MyPagination pagination={pagination} changePage={changePage} />
			}
			<div style={{ height: '10px' }} ref={lastElement} />
		</div>
	);
};

export default Posts;
