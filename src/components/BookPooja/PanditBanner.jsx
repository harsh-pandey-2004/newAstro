// import React from "react";
// import Banner2 from '../../assets/image/Banner2.png';
// const PanditBanner = () => {
//   const [templeOptions, setTempleOptions] = useState([]);
//   const [selectedTemple, setSelectedTemple] = useState(null);
//   const [poojaOptions, setPoojaOptions] = useState([]);
//   const [filteredPoojaOptions, setFilteredPoojaOptions] = useState([]);
//   const [selectedPooja, setSelectedPooja] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const { setFormData } = usePoojaContext();

//   useEffect(() => {
//     const fetchTemples = async () => {
//       try {
//         const response = await axios.get(
//           "https://astrobackend.onrender.com/api/getAllTemples"
//         );
//         const temples = response.data;
//         console.log(temples);
//         const templeOptions = temples.map((temple) => ({
//           value: temple.name,
//           label: temple.name,
//         }));
//         setTempleOptions(templeOptions);

//         const poojaData = temples.reduce((acc, temple) => {
//           acc[temple.name] = temple.relatedPooja.map((pooja) => ({
//             value: pooja,
//             label: pooja,
//           }));
//           return acc;
//         }, {});
//         setPoojaOptions(poojaData);
//       } catch (error) {
//         console.error("Error fetching temples:", error);
//       }
//     };

//     fetchTemples();
//   }, []);

//   useEffect(() => {
//     if (selectedTemple) {
//       console.log("Selected Temple:", selectedTemple);
//       console.log("Pooja Options:", poojaOptions);
//       setFilteredPoojaOptions(poojaOptions[selectedTemple.value] || []);
//     } else {
//       setFilteredPoojaOptions([]);
//     }
//   }, [selectedTemple, poojaOptions]);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = {
//       temple: selectedTemple,
//       pooja: selectedPooja,
//       date: selectedDate,
//     };

//     console.log("Form Data:", formData);
//     setFormData(formData);
//     onSearch();
//   };
//   return (
//     <div
//       className="relative bg-cover bg-center h-screen flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${Banner2})`,
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//       <div className="relative z-10 text-center text-white max-w-md mx-auto">
//         <h1 className="text-3xl md:text-4xl font-bold mb-6">
//           Perform Poojas remotely At prestigious Temples{" "}
//         </h1>
//         <form className="bg-white rounded-lg shadow-lg p-6 text-black">
//           <div className="mb-4">
//             <select
//               className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               defaultValue=""
//             >
//               <option value="" disabled>
//                 Select Pooja
//               </option>
//               <option value="pooja1">Pooja 1</option>
//               <option value="pooja2">Pooja 2</option>
//               <option value="pooja3">Pooja 3</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Select Temple"
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
import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner2 from "../../assets/image/Banner2.png";
import { useNavigate } from "react-router-dom";

const PanditBanner = () => {
  const [templeOptions, setTempleOptions] = useState([]);
  const [selectedTemple, setSelectedTemple] = useState(null);
  const [poojaOptions, setPoojaOptions] = useState({});
  const [filteredPoojaOptions, setFilteredPoojaOptions] = useState([]);
  const [selectedPooja, setSelectedPooja] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [templeDetails, setTempleDetails] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch temples and pooja options on mount
  useEffect(() => {
    const fetchTemples = async () => {
      try {
        const response = await axios.get(
          "https://astrobackend.onrender.com/api/getAllTemples"
        );

        setTempleDetails(response.data);
        const temples = response.data;

        const templeOptions = temples.map((temple) => ({
          value: temple.name,
          label: temple.name,
        }));
        setTempleOptions(templeOptions);

        const poojaData = temples.reduce((acc, temple) => {
          acc[temple.name] = temple.relatedPooja.map((pooja) => ({
            value: pooja,
            label: pooja,
          }));
          return acc;
        }, {});
        setPoojaOptions(poojaData);
      } catch (error) {
        console.error("Error fetching temples:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemples();
  }, []);

  // Update pooja options when a temple is selected
  useEffect(() => {
    if (selectedTemple) {
      setFilteredPoojaOptions(poojaOptions[selectedTemple.value] || []);
    } else {
      setFilteredPoojaOptions([]);
    }
  }, [selectedTemple, poojaOptions]);

  const handleTempleChange = (event) => {
    const selected = templeOptions.find(
      (option) => option.value === event.target.value
    );
    setSelectedTemple(selected);
  };

  const handlePoojaChange = (event) => {
    const selected = filteredPoojaOptions.find(
      (option) => option.value === event.target.value
    );
    setSelectedPooja(selected);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedTemple || !selectedPooja || !selectedDate) {
      alert("Please select all the fields before submitting.");
      return;
    }

    const formData = {
      temple: selectedTemple.value,
      pooja: selectedPooja.value,
      date: selectedDate,
    };

    console.log("Form Data:", formData);

    const filteredTempleData = templeDetails.filter((temple) => {
      return (
        temple.name === formData.temple &&
        temple.relatedPooja.includes(formData.pooja)
      );
    });

    navigate("/temple-details", { state: { filteredTempleData } });

    // console.log("Filtered Temple Data:", filteredTempleData);

    // Perform further actions like sending data to backend
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${Banner2})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white max-w-md mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Perform Poojas Remotely at Prestigious Temples
        </h1>
        {/* {loading ? (
          <p>Loading temples...</p>
        ) : ( */}
        <form
          className="bg-white rounded-lg shadow-lg p-6 text-black"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <select
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={selectedTemple?.value || ""}
              onChange={handleTempleChange}
            >
              <option value="" disabled>
                Select Temple
              </option>
              {templeOptions.map((temple) => (
                <option key={temple.value} value={temple.value}>
                  {temple.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <select
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={selectedPooja?.value || ""}
              onChange={handlePoojaChange}
              disabled={!selectedTemple}
            >
              <option value="" disabled>
                Select Pooja
              </option>
              {filteredPoojaOptions.map((pooja) => (
                <option key={pooja.value} value={pooja.value}>
                  {pooja.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <input
              type="date"
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-2 rounded-md hover:bg-yellow-600"
          >
            Book a Pandit
          </button>
        </form>
        {/* )} */}
      </div>
    </div>
  );
};

export default PanditBanner;
