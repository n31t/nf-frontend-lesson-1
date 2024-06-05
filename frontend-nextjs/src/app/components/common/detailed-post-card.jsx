import Link from 'next/link';

const DetailedPost = ({ post }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded overflow-hidden shadow-lg p-6">
      <div className="mb-6">
        <h1 className="font-bold text-3xl mb-4">{post.title}</h1>
        <div className="text-gray-700 text-base">
          {post.description}
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{post.author}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{post.date}</span>
      </div>
      <Link href="/blog" className="text-blue-500 hover:underline">Back to Blog
      </Link>
    </div>
  );
}

export default DetailedPost;
