import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Reemplaza con la URL de tu API

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/posts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export const fetchPostById = async (id: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching post with id ${id}:`, error);
        throw error;
    }
};

export const createPost = async (postData: any) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/posts`, postData);
        return response.data;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
};