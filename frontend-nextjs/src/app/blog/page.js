import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'
import data from '../data/data.json'
import PostCard from '../components/common/post-card'

export default function BlogPage() {
    return(
        
        <div className="h-screen">
            <Header />
            <div className="flex flex-wrap justify-center p-6 space-x-8 space-y-8">
            {data.map((post, index) => (
                <PostCard key={index} post={post}/>
            ))}
            </div>
            <Footer />
        </div>
    )
}


