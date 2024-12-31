import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-800 bg-gradient-to-t from-yellow-400 to-yellow-500 sm:px-8 pt-8 pb-3 ">
      <div className="container mx-auto sm:px-6 px-5   text-sm">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-bold text-lg">Astro Captain</h2>
            <p className="mt-4">
              Blending astrology, psychology, and counseling to empower your
              journey. We don’t just read your stars—we help you write your
              story. Solutions grounded, spiritually inspired, personally
              transformative.
            </p>
            <div className="flex mt-6 space-x-4">
              <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 shadow-lg">
                Register
              </button>
              
              <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 shadow-lg">
                Appoint
              </button>

            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <ul className="space-y-2">
              <li className="font-bold">Quick Links</li>
              <li>Book Tarot</li>
              <li>Dream Analysis</li>
              <li>Chat Astrologer</li>
              <li>Chat Astro-Counselor</li>
            </ul>
            <ul className="space-y-2">
              <li className="font-bold">Contact</li>
              <li>1234 Example Street, City</li>
              <li>info@example.com</li>
              <li>+123 456 7890</li>
            </ul>
            <ul className="space-y-2">
              <li className="font-bold">Services</li>
              <li>Book Image</li>
              <li>Collaborator</li>
              <li>Call Astrologer</li>
              <li>Vedic Healing</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-xs border-t border-yellow-300 pt-6 text-gray-700">
          © 2024 Astro Captain, All Rights Reserved. <br />
          <a href="#" className="hover:underline text-black">
            Terms & Conditions
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline text-black">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
