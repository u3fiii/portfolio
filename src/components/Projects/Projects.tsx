// src/components/Projects/Projects.tsx
import React from "react";
import { useQuery } from "react-query";
import {
  fetchBlogPosts,
  BlogPost,
  fetchAsset,
  Asset,
} from "../../data fetching/Contentful";

const Projects: React.FC = () => {
  const {
    data: blogPosts,
    error,
    isLoading,
  } = useQuery<BlogPost[], Error>("blogPosts", fetchBlogPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching blog posts: {error.message}</div>;
  }

  return (
    <div className="projects" id="Projects">
      <h2>Blog Posts</h2>
      <ul>
        {blogPosts?.map((post) => (
          <BlogPostItem key={post.sys.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

const BlogPostItem: React.FC<{ post: BlogPost }> = ({ post }) => {
  const {
    data: asset,
    error,
    isLoading,
  } = useQuery<Asset, Error>(["asset", post.fields.featuredImage.sys.id], () =>
    fetchAsset(post.fields.featuredImage.sys.id)
  );

  if (isLoading) {
    return <div>Loading image...</div>;
  }

  if (error) {
    return <div>Error fetching image: {error.message}</div>;
  }

  return (
    <li>
      {asset && (
        <img
          src={`https:${asset.fields.file.url}`} // Ensure the URL is prefixed with `https:`
          alt={asset.fields.description || "Featured Image"}
        />
      )}
      <h3>{post.fields.title}</h3>
      <p>{post.fields.description}</p>
    </li>
  );
};

export default Projects;
