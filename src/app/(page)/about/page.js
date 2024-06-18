const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          About Us
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Our Story
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Welcome to our blog! We are a group of enthusiastic writers who are
            passionate about sharing insights, stories, and knowledge on various
            topics. Our journey began with a simple idea: to create a platform
            where we can express our thoughts and connect with like-minded
            individuals.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Over the years, we have grown into a vibrant community of readers
            and contributors. Our blog covers a wide range of subjects,
            including technology, lifestyle, health, travel, and much more. We
            believe in the power of words to inspire, educate, and entertain.
          </p>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our mission is to provide high-quality content that adds value to
            our readers' lives. We strive to deliver articles that are not only
            informative but also engaging and thought-provoking. Whether you're
            looking for practical advice, personal stories, or the latest
            trends, we aim to be your go-to source for reliable and relatable
            content.
          </p>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mb-4 shadow-md"
              />
              <h3 className="text-xl font-bold text-gray-800">Jane Doe</h3>
              <p className="text-gray-500">Editor-in-Chief</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mb-4 shadow-md"
              />
              <h3 className="text-xl font-bold text-gray-800">John Smith</h3>
              <p className="text-gray-500">Senior Writer</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mb-4 shadow-md"
              />
              <h3 className="text-xl font-bold text-gray-800">Alice Johnson</h3>
              <p className="text-gray-500">Content Strategist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
