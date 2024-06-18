const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h5 className="text-xl font-bold mb-4">About Us</h5>
            <p className="text-gray-400">
              We are a team of passionate bloggers sharing insights and stories
              on various topics. Follow us to stay updated with the latest
              trends.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h5 className="text-xl font-bold mb-4">Quick Links</h5>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 mb-6">
            <h5 className="text-xl font-bold mb-4">Subscribe</h5>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <form>
              <input
                type="email"
                className="w-full px-4 py-2 mb-3 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
          <p className="text-gray-400">
            &copy; 2024 Blog Application. All rights reserved.
          </p>
          <div className="flex mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
