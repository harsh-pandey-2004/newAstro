import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-yellow-400 text-white">
      {/* Curved Yellow Background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-yellow-400 rounded-b-full"></div>

      <div className="container mx-auto px-6 py-10 relative text-sm">
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="font-bold text-lg">Astro Captain</h2>
            <p className="mt-2">
              Blending astrology, psychology, and counseling to empower your
              journey. We don’t just read your stars—we help you write your
              story. Solutions grounded, spiritually inspired, personally
              transformative.
            </p>
            <div className="flex mt-4 space-x-4">
              <button className="bg-black py-2 px-4 rounded hover:bg-gray-800">
                Register
              </button>
              <button className="bg-black py-2 px-4 rounded hover:bg-gray-800">
                Appoint
              </button>
            </div>
          </div>

          {/* Middle Section */}
          <div>
            <ul className="space-y-2">
              <li className="font-bold">Quick Links</li>
              <li>Book Tarot</li>
              <li>Dream Analysis</li>
              <li>Chat Astrologer</li>
              <li>Chat Astro-Counselor</li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <ul className="space-y-2">
              <li className="font-bold">Contact</li>
              <li>1234 Example Street, City</li>
              <li>info@example.com</li>
              <li>+123 456 7890</li>
            </ul>
            <ul className="mt-4 space-y-2">
              <li className="font-bold">Services</li>
              <li>Book Image</li>
              <li>Collaborator</li>
              <li>Call Astrologer</li>
              <li>Vedic Healing</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-xs border-t border-yellow-300 pt-4">
          © 2024 Astro Captain, All Rights Reserved. <br />
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
