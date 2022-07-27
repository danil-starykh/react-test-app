import React, { useState } from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

const PostForm = ({ create }) => {
	const [ post, setPost ] = useState({ title: '', body: '' });

	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			id: Date.now(),
			...post
		};
		create(newPost);
		setPost({ title: '', body: '' });
	};

	return (
		<form>
			<h3 style={{ color: '#0d99ea', marginBottom: '10px', textAlign: 'center' }}>
                        Хотите создать пост?
                  </h3>
			<MyInput
				value={post.title}
				type="text"
				placeholder="Название поста"
				onChange={(e) => setPost({ ...post, title: e.target.value })}
			/>
			<MyInput
				value={post.body}
				type="text"
				placeholder="Описание поста"
				onChange={(e) => setPost({ ...post, body: e.target.value })}
			/>
			<MyButton style={{ marginTop: '5px' }} onClick={addNewPost}>
				Создать пост
			</MyButton>
		</form>
	);
};

export default PostForm;
