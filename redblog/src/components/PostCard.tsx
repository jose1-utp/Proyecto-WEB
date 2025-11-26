import React from 'react';

interface PostCardProps {
    title: string;
    excerpt: string;
    imageUrl: string;
    onClick: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ title, excerpt, imageUrl, onClick }) => {
    return (
        <div className="post-card" onClick={onClick}>
            <img src={imageUrl} alt={title} className="post-card-image" />
            <h2 className="post-card-title">{title}</h2>
            <p className="post-card-excerpt">{excerpt}</p>
        </div>
    );
};

export default PostCard;