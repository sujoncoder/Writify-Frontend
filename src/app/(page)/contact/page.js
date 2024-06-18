const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Contact Us
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                Get in Touch
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                Our Location
              </h2>
              <div className="w-full border-2 h-64 rounded-lg overflow-hidden shadow-lg mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0827385938856!2d-122.42119608468153!3d37.7749295797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b9f9d1b%3A0xb8dfe9f7d8b69c0!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1623017906438!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
              <p className="text-gray-600 leading-relaxed">
                1355 Market St, Suite 900
                <br />
                San Francisco, CA 94103
                <br />
                United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
