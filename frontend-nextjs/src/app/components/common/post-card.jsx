import Link from 'next/link';

const PostCard = ({ post }) => {
    return (
        <div className="sm:w-full md:w-64 h-auto rounded overflow-hidden shadow-lg ">
            <div className="px-6 py-4">
                <Link href={`/blog/${post.id}`}>
                    <div className="font-bold text-xl mb-2">{post.title}</div>
                </Link>
                <p className="text-gray-700 text-base">
                    {post.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex flex-wrap">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{post.author}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{post.date}</span>
            </div>
        </div>
    )
}

export default PostCard;