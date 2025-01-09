import React from "react";
import footerFB from "../assets/image/Footerbg.webp";

const Footer = () => {
  return (
    <footer
      className="text-gray-800 sm:px-8 py-8 sm:pt-8 mt-10"
      style={{
        backgroundImage: `url(${footerFB})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className=" mx-auto text-sm ">
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
              <li className="cursor-pointer hover:underline">Book Tarot</li>
              <li className="cursor-pointer hover:underline">Dream Analysis</li>
              <li className="cursor-pointer hover:underline">Chat Astrologer</li>
              <li className="cursor-pointer hover:underline">Chat Astro-Counselor</li>
            </ul>
            <ul className="space-y-2">
              <li className="font-bold">Contact</li>
              <li>1234 Example Street, City</li>
              <li className="cursor-pointer hover:underline">info@example.com</li>
              <li className="cursor-pointer hover:underline">+123 456 7890</li>
            </ul>
            <ul className="space-y-2">
              <li className="font-bold">Services</li>
              <li className="cursor-pointer hover:underline">Book Image</li>
              <li className="cursor-pointer hover:underline">Collaborator</li>
              <li className="cursor-pointer hover:underline">Call Astrologer</li>
              <li className="cursor-pointer hover:underline">Vedic Healing</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="2 text-center text-xs border-t border-yellow-300 pt-6 text-gray-700">
          © 2024 Astro Captain, All Rights Reserved. <br />
          <a href="#" className="cursor-pointer hover:underline text-black">
            Terms & Conditions
          </a>{" "}
          |{" "}
          <a href="#" className="cursor-pointer hover:underline text-black">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
