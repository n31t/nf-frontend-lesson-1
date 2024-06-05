import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

export default function HomePage() {     
    return (
        <div className="h-screen">
            <Header />
            <div className="h-full">
                <h1 className="text-4xl md:text-6xl font-bold text-center py-20 md:py-32">Welcome to !n blog</h1>
                <p className="text-center mx-auto max-w-prose mt-4 text-sm px-5 md:px-0 md:text-lg">
                👋 Welcome to our blog! We're excited to share our thoughts, insights, and knowledge with you. Here, you'll find articles on a variety of topics, all designed to inspire, inform, and engage. Whether you're looking for tips, tutorials, or just some food for thought, we've got you covered. So sit back, grab a cup of coffee, and enjoy the read. We're glad you're here!
                </p>
            </div>
            <Footer />
        </div>
    )
}
