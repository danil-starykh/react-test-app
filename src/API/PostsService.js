import axios from "axios";

export default class PostsService {
	static async getPosts(limit = 10, pageIndex = 1) {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
			params: {
				_limit: limit,
				_page: pageIndex
			}
		});
		return response;
	}

	static async getPostById(postId) {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
		return response;
	}

	static async getPostCommentsById(postId) {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
		return response;
	}
}
