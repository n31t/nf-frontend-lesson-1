import Link from 'next/link';

const Header = () => {
    return (
        <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/home" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEF5dxWIHP0mY4wRxN6w8P21Q2g4ifDLCkw&s" className="w-14 h-14 text-white p-2 bg-black rounded-full" alt="logo" />
      <span class="ml-3 text-xl">!n blog
      </span>
      <span class="ml-3 text-xl">!n blog</span>
    </Link>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href="/home" class="mr-5 hover:text-gray-900">Home</Link>
      <Link href="/blog" class="mr-5 hover:text-gray-900">Blog</Link>
    </nav>
  </div>
</header>
    )
}

export default Header; 