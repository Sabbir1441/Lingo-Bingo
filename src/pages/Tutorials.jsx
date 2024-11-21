import { Link } from "react-router-dom";

const Tutorials = () => {

    const videos = [
        "https://www.youtube.com/embed/vEfd47I7R68", 
        "https://www.youtube.com/embed/bOQrmqnRPkM",
        "https://www.youtube.com/embed/fQqyZqFtIhE",
        "https://www.youtube.com/embed/qzgXPjwGBPs",
        "https://www.youtube.com/embed/3mNvQwyBrnI",
        "https://www.youtube.com/embed/XC62pWvw4b0",
      ];

    return (
        <div className="">
          <div className="py-8 text-center">
            <h1 className="text-4xl font-bold text-blue-600">Arabic Tutorials</h1>
            <p className="text-lg text-gray-700 mt-2">
              Explore the basics of the Arabic language with these handpicked tutorials.
            </p>
          </div>
    
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <iframe
                    width="100%"
                    height="200"
                    src={video}
                    title={`Tutorial ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-t-lg"
                  ></iframe>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Tutorial {index + 1}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Learn important concepts for mastering Arabic.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
    
          <div className="text-center py-8">
            <Link
              to="/start-learning"
              className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Learn Vocabularies
            </Link>
          </div>
        </div>
      );
};

export default Tutorials;