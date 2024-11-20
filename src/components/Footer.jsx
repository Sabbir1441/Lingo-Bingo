import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto w-11/12">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="flex items-center gap-2 text-gray-300">
                            <FaEnvelope /> support@lingobingo.com
                        </p>
                        <p className="flex items-center gap-2 text-gray-300 mt-2">
                            <FaPhone /> +880 1700000023
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                className="text-gray-300 hover:text-blue-500 text-2xl"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://twitter.com"
                                className="text-gray-300 hover:text-blue-400 text-2xl"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://instagram.com"
                                className="text-gray-300 hover:text-pink-500 text-2xl"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://linkedin.com"
                                className="text-gray-300 hover:text-blue-600 text-2xl"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-600 my-6"></div>
                <div className="text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Lingo Bingo. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
