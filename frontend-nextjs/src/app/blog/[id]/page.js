"use client";

import Header from "@/app/components/layouts/header";
import Footer from "@/app/components/layouts/footer";
import data from "@/app/data/data.json";
// import PostCard from "@/app/components/common/post-card";
import { useEffect } from "react";
import { useState } from "react";
import DetailedPost from "@/app/components/common/detailed-post-card";

const BlogPost = ({params: {id}}) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
        const postData = await getPostById(id);
        setPost(postData);
        };

        fetchPost();
    }, [id]);
    return (
        <div>
            <Header/>

            <div className="flex  flex-wrap justify-center p-8 space-x-8 space-y-8">
            {post ? (
          <DetailedPost key={post.id} post={post} />
        ) : (
          <p>Loading...</p>
        )}
            </div>
            <Footer/>
        </div>
    );
}

export default BlogPost;

export async function getPostById( id ) {
    id = 1;
    const post = data.find(post => post.id === id);
    console.log(post);
    return post;
}