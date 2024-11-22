import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
        <p className="text-lg text-gray-700 mt-4">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="text-blue-600 hover:underline mt-6 block">
          Go back to Home
        </Link>
      </div>
    );
};

export default NotFound;