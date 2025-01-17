// import React from "react";
// import BannerImage from "../../assets/image/BannerImage.png";
// const poojaOptions = [
//   { value: "Rudrabhishek Puja", label: "Rudrabhishek Puja" },
//   { value: "Diwali Pooja", label: "Diwali Pooja" },
//   { value: "Durga Puja", label: "Durga Puja" },
//   { value: "Ganesh Chaturthi Puja", label: "Ganesh Chaturthi Puja" },
//   { value: "Lakshmi Puja", label: "Lakshmi Puja" },
//   { value: "Saraswati Puja", label: "Saraswati Puja" },
//   { value: "Shivratri Puja", label: "Shivratri Puja" },
//   { value: "Navratri Pooja", label: "Navratri Pooja" },
//   { value: "Hanuman Puja", label: "Hanuman Puja" },
//   { value: "Kali Puja", label: "Kali Puja" },
//   { value: "Janmashtami Puja", label: "Janmashtami Puja" },
//   { value: "Vastu Shanti Puja", label: "Vastu Shanti Puja" },
//   { value: "Griha Pravesh Puja", label: "Griha Pravesh Puja" },
//   { value: "Wedding Puja", label: "Wedding Puja" },
//   { value: "Namkaran Puja", label: "Namkaran Puja" },
//   { value: "Annaprashan Puja", label: "Annaprashan Puja" },
//   { value: "Mundan Puja", label: "Mundan Puja" },
//   { value: "Akshaya Tritiya Puja", label: "Akshaya Tritiya Puja" },
//   { value: "Karva Chauth Puja", label: "Karva Chauth Puja" },
//   { value: "Sankranti Puja", label: "Sankranti Puja" },
//   { value: "Bhoomi Puja", label: "Bhoomi Puja" },
// ];

// const pincodeOptions = [
//   { value: "111111", label: "111111" },
//   { value: "110002", label: "110002" },
//   { value: "110003", label: "110003" },
//   { value: "110004", label: "110004" },
//   // Add more pincode options as needed
// ];

// const PanditBanner = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [response, setResponse] = useState({ nameOfPooja: "", pincode: "" });
//   const [isPoojaDropdownOpen, setIsPoojaDropdownOpen] = useState(false);
//   const [isPincodeDropdownOpen, setIsPincodeDropdownOpen] = useState(false);

//   const handleChange = (selectedOption, actionMeta) => {
//     setResponse({ ...response, [actionMeta.name]: selectedOption });
//     if (actionMeta.name === "nameOfPooja") {
//       localStorage.setItem("selectedPooja", selectedOption.value);
//     }
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

// const handleClick = async (e) => {
//   e.preventDefault();

//   // const formattedDate = selectedDate
//   //   ? `${selectedDate.getFullYear()}/${(selectedDate.getMonth() + 1)
//   //       .toString()
//   //       .padStart(2, "0")}/${selectedDate
//   //       .getDate()
//   //       .toString()
//   //       .padStart(2, "0")}`
//   //   : null;
//   const formattedDate = selectedDate
//     ? `${selectedDate.getDate().toString().padStart(2, "0")}/${(
//         selectedDate.getMonth() + 1
//       )
//         .toString()
//         .padStart(2, "0")}/${selectedDate.getFullYear()}`
//     : null;

//   localStorage.setItem("Poojadate", formattedDate);

//   // console.log(response)
//   //   console.log(formattedDate);
//   //   console.log(response.pincode.value)
//   const pincode = response.pincode.value;
//   // console.log(pincode);

//   localStorage.setItem("Pincode", pincode);

//   if (!formattedDate || !response.nameOfPooja || !response.pincode) {
//     console.error("Please fill in all fields");
//     return;
//   }

//   try {
//     console.log(formattedDate);
//     const res = await axios.post(
//       " https://astrobackend.onrender.com/api/panditprofile",
//       { pincode: pincode, availability: formattedDate }
//     );
//     // console.log(res);
//     // const filteredData = res.data.data.filter(
//     //   (pandit) =>
//     //     pandit.availability.date.filter((e) => e == formattedDate) &&
//     //     pandit.pincode === response.pincode.value &&
//     //     pandit.Skills.includes(response.nameOfPooja.value)
//     // );
//     // console.log(filteredData);
//     // setFilterData(res.data);
//     console.log(res.data);
//     setFilteredData(res.data);
//   } catch (error) {
//     console.log("Error :", error);
//   }
// };

//   const togglePoojaDropdown = () => {
//     setIsPoojaDropdownOpen(!isPoojaDropdownOpen);
//   };

//   const togglePincodeDropdown = () => {
//     setIsPincodeDropdownOpen(!isPincodeDropdownOpen);
//   };
//   return (
//     <div
//       className="relative bg-cover bg-center h-screen flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${BannerImage})`,
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//       <div className="relative z-10 text-center text-white max-w-md mx-auto">
//         <h1 className="text-3xl md:text-4xl font-bold mb-6">
//           Book A Pandit For Your Sacred Rituals
//         </h1>
//         <form className="bg-white rounded-lg shadow-lg p-6 text-black">
//           <div className="mb-4">
//             <select
//               className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               defaultValue=""
//             >
//               <option value="" disabled>
//                 Select Pooja Name
//               </option>
//               <option value="pooja1">Pooja 1</option>
//               <option value="pooja2">Pooja 2</option>
//               <option value="pooja3">Pooja 3</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Select Pincode"
//               className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="date"
//               className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-white font-bold py-2 rounded-md hover:bg-yellow-600"
//           >
//             Book a Pandit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PanditBanner;

import React, { useState } from "react";
import axios from "axios";
import BannerImage from "../../assets/image/BannerImage.png";
import { useNavigate } from "react-router-dom";

const poojaOptions = [
  { value: "Rudrabhishek Puja", label: "Rudrabhishek Puja" },
  { value: "Diwali Pooja", label: "Diwali Pooja" },
  { value: "Durga Puja", label: "Durga Puja" },
  { value: "Ganesh Chaturthi Puja", label: "Ganesh Chaturthi Puja" },
  { value: "Lakshmi Puja", label: "Lakshmi Puja" },
  { value: "Saraswati Puja", label: "Saraswati Puja" },
  { value: "Shivratri Puja", label: "Shivratri Puja" },
  { value: "Navratri Pooja", label: "Navratri Pooja" },
  { value: "Hanuman Puja", label: "Hanuman Puja" },
  { value: "Kali Puja", label: "Kali Puja" },
  { value: "Janmashtami Puja", label: "Janmashtami Puja" },
  { value: "Vastu Shanti Puja", label: "Vastu Shanti Puja" },
  { value: "Griha Pravesh Puja", label: "Griha Pravesh Puja" },
  { value: "Wedding Puja", label: "Wedding Puja" },
  { value: "Namkaran Puja", label: "Namkaran Puja" },
  { value: "Annaprashan Puja", label: "Annaprashan Puja" },
  { value: "Mundan Puja", label: "Mundan Puja" },
  { value: "Akshaya Tritiya Puja", label: "Akshaya Tritiya Puja" },
  { value: "Karva Chauth Puja", label: "Karva Chauth Puja" },
  { value: "Sankranti Puja", label: "Sankranti Puja" },
  { value: "Bhoomi Puja", label: "Bhoomi Puja" },
];

const PanditBanner = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [response, setResponse] = useState({ nameOfPooja: "", pincode: "" });
  const [availablePandits, setAvailablePandits] = useState([]);
  const navigate = useNavigate();
  const [isPoojaDropdownOpen, setIsPoojaDropdownOpen] = useState(false);
  const [isPincodeDropdownOpen, setIsPincodeDropdownOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setResponse((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const formattedDate = selectedDate;
    console.log(formattedDate);
    console.log(response.pincode);

    localStorage.setItem("Poojadate", formattedDate);
    localStorage.setItem("Pincode", response.pincode);

    if (!formattedDate || !response.nameOfPooja || !response.pincode) {
      console.error("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post(
        "https://astrobackend.onrender.com/api/panditprofile",
        {
          pincode: response.pincode,
          availability: formattedDate,
        }
      );
      console.log(res.data);
      setAvailablePandits(res.data);
      navigate("/available-pandits", { state: { availablePandits: res.data } });
    } catch (error) {
      console.log("Error :", error);
    }
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white max-w-md mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Book A Pandit For Your Sacred Rituals
        </h1>
        <form
          className="bg-white rounded-lg shadow-lg p-6 text-black"
          onSubmit={handleClick}
        >
          <div className="mb-4">
            <select
              name="nameOfPooja"
              value={response.nameOfPooja}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="" disabled>
                Select Pooja Name
              </option>
              {poojaOptions.map((pooja) => (
                <option key={pooja.value} value={pooja.value}>
                  {pooja.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="pincode"
              placeholder="Enter Pincode"
              value={response.pincode}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              value={selectedDate || ""}
              onChange={handleDateChange}
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-2 rounded-md hover:bg-yellow-600"
          >
            Book a Pandit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PanditBanner;
