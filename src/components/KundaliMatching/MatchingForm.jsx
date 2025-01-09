// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const HoroscopeMatchingForm = () => {
//   const [activeTab, setActiveTab] = useState("boy");
//   const navigate = useNavigate();

//   const [boyerrors, setBoyerrors] = useState({});
//   const [boyDetails, setBoyDetails] = useState({
//     name: "",
//     day: 1,
//     month: 1,
//     year: 1990,
//     hour: 0,
//     minute: 0,
//     second: 0,
//     birthPlace: "",
//   });

//   const [girlerrors, setGirlerrors] = useState({});
//   const [girlDetails, setGirlDetails] = useState({
//     name: "",
//     day: 1,
//     month: 1,
//     year: 1990,
//     hour: 0,
//     minute: 0,
//     second: 0,
//     birthPlace: "",
//   });

//   const handleInputChange = (e, setDetails) => {
//     const { name, value } = e.target;
//     setDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   const getMonthName = (monthIndex) => {
//     const months = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];
//     return months[monthIndex];
//   };

//   const ValidateForm = () => {
//     const newBoyerrors = {};
//     const newGirlerrors = {};

//     // Validating boy's details
//     if (!boyDetails.name) newBoyerrors.name = "Name is required";
//     if (!boyDetails.day) newBoyerrors.day = "Day is required";
//     if (!boyDetails.month) newBoyerrors.month = "Month is required";
//     if (!boyDetails.year) newBoyerrors.year = "Year is required";
//     if (!boyDetails.hour) newBoyerrors.hour = "Hour is required";
//     if (!boyDetails.minute) newBoyerrors.minute = "Minute is required";
//     if (!boyDetails.second) newBoyerrors.second = "Second is required";
//     if (!boyDetails.birthPlace)
//       newBoyerrors.birthPlace = "BirthPlace is required";

//     // Validating girl's details
//     if (!girlDetails.name) newGirlerrors.name = "Name is required";
//     if (!girlDetails.day) newGirlerrors.day = "Day is required";
//     if (!girlDetails.month) newGirlerrors.month = "Month is required";
//     if (!girlDetails.year) newGirlerrors.year = "Year is required";
//     if (!girlDetails.hour) newGirlerrors.hour = "Hour is required";
//     if (!girlDetails.minute) newGirlerrors.minute = "Minute is required";
//     if (!girlDetails.second) newGirlerrors.second = "Second is required";
//     if (!girlDetails.birthPlace)
//       newGirlerrors.birthPlace = "BirthPlace is required";

//     return { newBoyerrors, newGirlerrors };
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { newBoyerrors, newGirlerrors } = ValidateForm();

//     if (Object.keys(newBoyerrors).length > 0) {
//       setBoyerrors(newBoyerrors);
//     } else {
//       setBoyerrors({});
//     }

//     if (Object.keys(newGirlerrors).length > 0) {
//       setGirlerrors(newGirlerrors);
//     } else {
//       setGirlerrors({});
//     }

//     // If there are no errors, proceed with navigation
//     if (
//       Object.keys(newBoyerrors).length === 0 &&
//       Object.keys(newGirlerrors).length === 0
//     ) {
//       console.log("Boy's Details:", boyDetails);
//       console.log("Girl's Details:", girlDetails);
//       const details = { boy: boyDetails, girl: girlDetails };
//       navigate("/match-report", { state: { details } });
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <div className="grid grid-cols-12 gap-4">
//         {/* Boy's Details Section */}
//         <div className="col-span-5">
//           <div className="border rounded-lg p-4">
//             <div className="bg-yellow-400 text-black text-center py-2 rounded mb-4">
//               Boy's Detail
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm mb-1">Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter name"
//                 className="w-full border rounded px-3 py-2 text-sm"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm mb-1">Birth Details</label>
//               <div className="grid grid-cols-3 gap-2">
//                 <div>
//                   <select className="w-full border rounded px-2 py-2 text-sm">
//                     <option>Hour</option>
//                   </select>
//                 </div>
//                 <div>
//                   <select className="w-full border rounded px-2 py-2 text-sm">
//                     <option>Minute</option>
//                   </select>
//                 </div>
//                 <div>
//                   <select className="w-full border rounded px-2 py-2 text-sm">
//                     <option>Second</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm mb-1">Birth Place</label>
//               <input
//                 type="text"
//                 placeholder="New Delhi (DEL, INDIA)"
//                 className="w-full border rounded px-3 py-2 text-sm"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Girl's Details Section */}
//         <div className="col-span-5">
//           <div className="border rounded-lg p-4">
//             <div className="bg-yellow-400 text-black text-center py-2 rounded mb-4">
//               Girl's Detail
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm mb-1">Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter name"
//                 className="w-full border rounded px-3 py-2 text-sm"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm mb-1">Birth Details</label>
//               <div className="grid grid-cols-3 gap-2">
//                 <div>
//                   <select className="w-full border rounded px-2 py-2 text-sm">
//                     <option>Hour</option>
//                   </select>
//                 </div>
//                 <div>
//                   <select className="w-full border rounded px-2 py-2 text-sm">
//                     <option>Minute</option>
//                   </select>
//                 </div>
//                 <div>
//                   <select className="w-full border rounded px-2 py-2 text-sm">
//                     <option>Second</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm mb-1">Birth Place</label>
//               <input
//                 type="text"
//                 placeholder="New Delhi (DEL, INDIA)"
//                 className="w-full border rounded px-3 py-2 text-sm"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Saved Matches Section */}
//         <div className="col-span-2">
//           <div className="border rounded-lg p-4 h-full">
//             <div className="text-center mb-4 font-medium">Saved Matches</div>

//             <div className="flex items-center justify-center h-48">
//               <div className="text-center text-sm text-gray-500">
//                 Please login to check your saved horoscope!
//                 <button className="block mx-auto mt-2 bg-yellow-400 text-black px-4 py-1 rounded text-sm">
//                   Login
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Match Horoscope Button */}
//       <div className="mt-4 text-center">
//         <button
//           onClick={handleSubmit}
//           className="bg-yellow-400 text-black px-8 py-2 rounded"
//         >
//           Match Horoscope
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HoroscopeMatchingForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HoroscopeMatchingForm = () => {
  const [activeTab, setActiveTab] = useState("boy");
  const navigate = useNavigate();

  const [boyerrors, setBoyerrors] = useState({});
  const [boyDetails, setBoyDetails] = useState({
    name: "",
    day: 1,
    month: 1,
    year: 1990,
    hour: 0,
    minute: 0,
    second: 0,
    birthPlace: "",
  });

  const [girlerrors, setGirlerrors] = useState({});
  const [girlDetails, setGirlDetails] = useState({
    name: "",
    day: 1,
    month: 1,
    year: 1990,
    hour: 0,
    minute: 0,
    second: 0,
    birthPlace: "",
  });

  const handleInputChange = (e, setDetails) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const getMonthName = (monthIndex) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[monthIndex];
  };

  const ValidateForm = () => {
    const newBoyerrors = {};
    const newGirlerrors = {};

    // Validating boy's details
    if (!boyDetails.name) newBoyerrors.name = "Name is required";
    if (!boyDetails.day) newBoyerrors.day = "Day is required";
    if (!boyDetails.month) newBoyerrors.month = "Month is required";
    if (!boyDetails.year) newBoyerrors.year = "Year is required";
    if (!boyDetails.hour) newBoyerrors.hour = "Hour is required";
    if (!boyDetails.minute) newBoyerrors.minute = "Minute is required";
    if (!boyDetails.second) newBoyerrors.second = "Second is required";
    if (!boyDetails.birthPlace)
      newBoyerrors.birthPlace = "BirthPlace is required";

    // Validating girl's details
    if (!girlDetails.name) newGirlerrors.name = "Name is required";
    if (!girlDetails.day) newGirlerrors.day = "Day is required";
    if (!girlDetails.month) newGirlerrors.month = "Month is required";
    if (!girlDetails.year) newGirlerrors.year = "Year is required";
    if (!girlDetails.hour) newGirlerrors.hour = "Hour is required";
    if (!girlDetails.minute) newGirlerrors.minute = "Minute is required";
    if (!girlDetails.second) newGirlerrors.second = "Second is required";
    if (!girlDetails.birthPlace)
      newGirlerrors.birthPlace = "BirthPlace is required";

    return { newBoyerrors, newGirlerrors };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { newBoyerrors, newGirlerrors } = ValidateForm();

    if (Object.keys(newBoyerrors).length > 0) {
      setBoyerrors(newBoyerrors);
    } else {
      setBoyerrors({});
    }

    if (Object.keys(newGirlerrors).length > 0) {
      setGirlerrors(newGirlerrors);
    } else {
      setGirlerrors({});
    }

    // If there are no errors, proceed with navigation
    if (
      Object.keys(newBoyerrors).length === 0 &&
      Object.keys(newGirlerrors).length === 0
    ) {
      console.log("Boy's Details:", boyDetails);
      console.log("Girl's Details:", girlDetails);
      const details = { boy: boyDetails, girl: girlDetails };
      navigate("/match-report", { state: { details } });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-12 gap-4">
        {/* Boy's Details Section */}
        <div className="col-span-5">
          <div className="border rounded-lg p-4">
            <div className="bg-yellow-400 text-black text-center py-2 rounded mb-4">
              Boy's Detail
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={boyDetails.name}
                onChange={(e) => handleInputChange(e, setBoyDetails)}
                placeholder="Enter name"
                className="w-full border rounded px-3 py-2 text-sm"
              />
              {boyerrors.name && (
                <p className="text-red-500 text-xs">{boyerrors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Birth Details</label>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <input
                    type="number"
                    name="hour"
                    value={boyDetails.hour || ""}
                    onChange={(e) => handleInputChange(e, setBoyDetails)}
                    placeholder="Hour"
                    className="w-full border rounded px-2 py-2 text-sm"
                  />
                  {boyerrors.hour && (
                    <p className="text-red-500 text-xs">{boyerrors.hour}</p>
                  )}
                </div>
                <div>
                  <input
                    type="number"
                    name="minute"
                    value={boyDetails.minute || ""}
                    onChange={(e) => handleInputChange(e, setBoyDetails)}
                    placeholder="Minute"
                    className="w-full border rounded px-2 py-2 text-sm"
                  />
                  {boyerrors.minute && (
                    <p className="text-red-500 text-xs">{boyerrors.minute}</p>
                  )}
                </div>
                <div>
                  <input
                    type="number"
                    name="second"
                    value={boyDetails.second || ""}
                    onChange={(e) => handleInputChange(e, setBoyDetails)}
                    placeholder="Second"
                    className="w-full border rounded px-2 py-2 text-sm"
                  />
                  {boyerrors.second && (
                    <p className="text-red-500 text-xs">{boyerrors.second}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Birth Place</label>
              <input
                type="text"
                name="birthPlace"
                value={boyDetails.birthPlace}
                onChange={(e) => handleInputChange(e, setBoyDetails)}
                placeholder="City"
                className="w-full border rounded px-3 py-2 text-sm"
              />
              {boyerrors.birthPlace && (
                <p className="text-red-500 text-xs">{boyerrors.birthPlace}</p>
              )}
            </div>
          </div>
        </div>

        {/* Girl's Details Section */}
        <div className="col-span-5">
          <div className="border rounded-lg p-4">
            <div className="bg-yellow-400 text-black text-center py-2 rounded mb-4">
              Girl's Detail
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={girlDetails.name}
                onChange={(e) => handleInputChange(e, setGirlDetails)}
                placeholder="Enter name"
                className="w-full border rounded px-3 py-2 text-sm"
              />
              {girlerrors.name && (
                <p className="text-red-500 text-xs">{girlerrors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Birth Details</label>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <input
                    type="number"
                    name="hour"
                    value={girlDetails.hour || ""}
                    onChange={(e) => handleInputChange(e, setGirlDetails)}
                    placeholder="Hour"
                    className="w-full border rounded px-2 py-2 text-sm"
                  />
                  {girlerrors.hour && (
                    <p className="text-red-500 text-xs">{girlerrors.hour}</p>
                  )}
                </div>
                <div>
                  <input
                    type="number"
                    name="minute"
                    value={girlDetails.minute || ""}
                    onChange={(e) => handleInputChange(e, setGirlDetails)}
                    placeholder="Minute"
                    className="w-full border rounded px-2 py-2 text-sm"
                  />
                  {girlerrors.minute && (
                    <p className="text-red-500 text-xs">{girlerrors.minute}</p>
                  )}
                </div>
                <div>
                  <input
                    type="number"
                    name="second"
                    value={girlDetails.second || ""}
                    onChange={(e) => handleInputChange(e, setGirlDetails)}
                    placeholder="Second"
                    className="w-full border rounded px-2 py-2 text-sm"
                  />
                  {girlerrors.second && (
                    <p className="text-red-500 text-xs">{girlerrors.second}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Birth Place</label>
              <input
                type="text"
                name="birthPlace"
                value={girlDetails.birthPlace}
                onChange={(e) => handleInputChange(e, setGirlDetails)}
                placeholder="City"
                className="w-full border rounded px-3 py-2 text-sm"
              />
              {girlerrors.birthPlace && (
                <p className="text-red-500 text-xs">{girlerrors.birthPlace}</p>
              )}
            </div>
          </div>
        </div>

        {/* Saved Matches Section */}
        <div className="col-span-2">
          <div className="border rounded-lg p-4 h-full">
            <div className="text-center mb-4 font-medium">Saved Matches</div>

            <div className="flex items-center justify-center h-48">
              <div className="text-center text-sm text-gray-500">
                Please login to check your saved horoscope!
                <button className="block mx-auto mt-2 bg-yellow-400 text-black px-4 py-1 rounded text-sm">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Match Horoscope Button */}
      <div className="mt-4 text-center">
        <button
          onClick={handleSubmit}
          className="bg-yellow-400 text-black px-8 py-2 rounded"
        >
          Match Horoscope
        </button>
      </div>
    </div>
  );
};

export default HoroscopeMatchingForm;
