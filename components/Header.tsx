import { useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path: any) => {
    router.push(path);
    setIsOpen(false);
    setActiveLink(path);
  };

  return (
    <header className="bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <a
            href="/"
            className="text-white font-bold text-lg"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }}
          >
            DappLottery
          </a>
        </div>

        <nav className="hidden md:flex flex-grow justify-center">
          <a
            href="/docs"
            className={`text-white hover:text-gray-300 px-4 py-2 ${
              activeLink === '/docs' ? 'text-gray-300' : ''
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/docs');
            }}
          >
            Home
          </a>
          <a
            href="/examples"
            className={`text-white hover:text-gray-300 px-4 py-2 ${
              activeLink === '/examples' ? 'text-gray-300' : ''
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/examples');
            }}
          >
            How to Play
          </a>
          <a
            href="/lottery"
            className={`text-white hover:text-gray-300 px-4 py-2 ${
              activeLink === '/lottery' ? 'text-gray-300' : ''
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/lottery');
            }}
          >
            All Lottery
          </a>
          <a
            href="/contact"
            className={`text-white hover:text-gray-300 px-4 py-2 ${
              activeLink === '/contact' ? 'text-gray-300' : ''
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/contact');
            }}
          >
            Contact
          </a>
        </nav>

        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16M4 12h16M4 19h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:flex hidden items-center ${isOpen ? 'flex' : 'hidden'}`}>
          <button
            className="text-white hover:text-gray-300 px-4 py-2 rounded-md bg-transparent border border-gray-300"
            onClick={() => {
              // Connect Wallet functionality
            }}
          >
            Connect Wallet
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden absolute top-0 left-0 w-full bg-gradient-to-r from-purple-500 to-blue-500 py-3">
            <a
              href="/docs"
              className={`block text-white font-medium py-2 px-4 ${
                activeLink === '/docs' ? 'text-gray-300' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/docs');
              }}
            >
              Docs
            </a>
            <a
              href="/examples"
              className={`block text-white font-medium py-2 px-4 ${
                activeLink === '/examples' ? 'text-gray-300' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/examples');
              }}
            >
              Examples
            </a>
            <a
              href="/community"
              className={`block text-white font-medium py-2 px-4 ${
                activeLink === '/community' ? 'text-gray-300' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/community');
              }}
            >
              Community
            </a>
            <button
              className="block text-white font-medium py-2 px-4 mt-2 mx-auto rounded-md bg-transparent border border-gray-300"
              onClick={() => {
                // Connect Wallet functionality
              }}
            >
              Connect Wallet
            </button>
          </nav>
        )}
      </div>

      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-4xl text-white font-bold mb-4">Welcome to DappLottery</h1>
        <p className="text-lg text-gray-300">Play and Win Big with Our Exciting Lottery Games!</p>
        <button className="mt-6 py-3 px-8 rounded-md bg-pink-500 text-white font-medium hover:bg-pink-600">
          Create Jackpot
        </button>
      </div>
    </header>
  );
};

export default Header;
