// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Extratopping from "@/Components/Extratopping";
// import Dropdown from "@/Components/Dropdown";
// import Heading from "@/Components/Heading";
// import OrderButton from "@/Components/OrderButton";

// function Pizza() {
//   const [modalImage, setModalImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef(null);

//   const foodItems = [
//     {
//       name: "Crown Crust",
//       sizes: {
//         small: "______",
//         medium: "1199",
//         large: "1699",
//       },
//       image: "pizzaassets/crowncrust.jpg",
//     },
//     {
//       name: "Square Pizza",
//       sizes: {
//         small: "749",
//         medium: "1299",
//         large: "1849",
//       },
//       image: "pizzaassets/squarepizza.jpg",
//     },
//     {
//       name: "Stuffed Crust",
//       sizes: {
//         small: "______",
//         medium: "1249",
//         large: "1849",
//       },
//       image: "pizzaassets/stuffcrust.jpg",
//     },
//     {
//       name: "Karara Tikka",
//       sizes: {
//         small: "______",
//         medium: "1099",
//         large: "1599",
//       },
//       image: "/pizzaassets/kararatikka.jpg",
//     },
//     {
//       name: "GrillOut Special",
//       sizes: {
//         small: "699",
//         medium: "1049",
//         large: "1599",
//       },
//       image: "/pizzaassets/specialpizza.jpg",
//     },
//     {
//       name: "Seekh Kabab",
//       sizes: {
//         small: "699",
//         medium: "1049",
//         large: "1599",
//       },
//       image: "/pizzaassets/seekhkabab.jpg",
//     },
//     // New three items
//     {
//       name: "Shahi Mughlai",
//       sizes: {
//         small: "649",
//         medium: "1049",
//         large: "1549",
//       },
//       image: "/pizzaassets/shahimuglai.jpg", // Replace with actual image URL
//     },
//     {
//       name: "Chicken Supreme",
//       sizes: {
//         small: "649",
//         medium: "1049",
//         large: "1549",
//       },
//       image: "/pizzaassets/supreem.jpg", // Replace with actual image URL
//     },
//     {
//       name: "Chicken Tikka",
//       sizes: {
//         small: "649",
//         medium: "1049",
//         large: "1549",
//       },
//       image: "/pizzaassets/tikkapizza.webp", // Replace with actual image URL
//     },
//     {
//       name: "Chicken Fajita",
//       sizes: {
//         small: "649",
//         medium: "1049",
//         large: "1549",
//       },
//       image: "/pizzaassets/fajita.jpg", // Replace with actual image URL
//     },
//     {
//       name: "Chicken Tandoori",
//       sizes: {
//         small: "649",
//         medium: "1049", 
//         large: "1549",
//       },
//       image: "/pizzaassets/tandooripizza.jpg", // Replace with actual image URL
//     },
//     {
//       name: "Peri Peri Special",
//       sizes: {
//         small: "649",
//         medium: "1049",
//         large: "1549",
//       },
//       image: "/pizzaassets/peripizza.jpg", // Replace with actual image URL
//     },
//     {
//       name: "Cheese Lover",
//       sizes: {
//         small: "649",
//         medium: "1049",
//         large: "1549",
//       },
//       image: "/pizzaassets/cheeselover.jpg", // Replace with actual image URL
//     },
//     {
//       name: "Hot n Spicy",
//       sizes: {
//         small: "649",
//         medium: "1049",
//         large: "1549",
//       },
//       image: "/pizzaassets/hotnspicy.jpg", // Replace with actual image URL
//     },
//   ];

//   const handleImageClick = (image) => {
//     setModalImage(image);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalImage(null);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (ref.current) {
//         const rect = ref.current.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom >= 0) {
//           setIsVisible(true);
//           window.removeEventListener("scroll", handleScroll);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       className={`bg-black py-6 relative ${isVisible ? "fade-in-up" : ""}`}
//       ref={ref}
//     >
//       <Heading/>
//       <Dropdown />
//       <h2 className="text-2xl pt-10 pb-4 font-extrabold text-white text-center mb-4">Pizza</h2>
//       <div className="max-h-[450px] overflow-y-auto overflow-x-hidden scrollable-container">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 w-full text-xs font-extrabold text-white max-w-[800px] mx-auto">
//           {foodItems.map((item, index) => (
//             <article className="flex flex-col items-center" key={index}>
//               <img
//                 loading="lazy"
//                 src={item.image}
//                 alt={`Image of ${item.name}`}
//                 className="object-contain rounded-xl aspect-square w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] cursor-pointer"
//                 onClick={() => handleImageClick(item.image)}
//               />
//               <h3 className="self-center mt-3 text-xl w-full text-center min-w-[120px]">
//                 {item.name}
//               </h3>
//               <div className="self-center mt-2">
//                 {Object.entries(item.sizes).map(([size, price]) => (
//                   <p key={size} className="text-lg w-full text-yellow-400 flex justify-between mt-1">
//                     <span>{size.charAt(0).toUpperCase() + size.slice(1)}</span>
//                     <span className="ml-2">{price}</span>
//                   </p>
//                 ))}
//               </div>
//               <OrderButton/>
//             </article>
//           ))}
//         </div>
//       </div>

//       <Extratopping />

//       {isModalOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
//           onClick={closeModal}
//         >
//           <div className="relative">
//             <img
//               src={modalImage}
//               alt="Full view"
//               className="max-w-full max-h-screen rounded-lg"
//             />
//             <button
//               className="absolute top-2 right-2 text-white text-2xl"
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Pizza;




"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Extratopping from "@/Components/Extratopping";
import Dropdown from "@/Components/Dropdown";
import Heading from "@/Components/Heading";
import OrderButton from "@/Components/OrderButton";

function Pizza() {
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const foodItems = [
    {
      name: "Crown Crust",
      sizes: { small: "______", medium: "1199", large: "1699" },
      image: "/pizzaassets/crowncrust.jpg",
    },
    {
      name: "Square Pizza",
      sizes: { small: "749", medium: "1299", large: "1849" },
      image: "/pizzaassets/squarepizza.jpg",
    },
    {
      name: "Stuffed Crust",
      sizes: { small: "______", medium: "1249", large: "1849" },
      image: "/pizzaassets/stuffcrust.jpg",
    },
    {
      name: "Karara Tikka",
      sizes: { small: "______", medium: "1099", large: "1599" },
      image: "/pizzaassets/kararatikka.jpg",
    },
    {
      name: "GrillOut Special",
      sizes: { small: "699", medium: "1049", large: "1599" },
      image: "/pizzaassets/specialpizza.jpg",
    },
    {
      name: "Seekh Kabab",
      sizes: { small: "699", medium: "1049", large: "1599" },
      image: "/pizzaassets/seekhkabab.jpg",
    },
    {
      name: "Shahi Mughlai",
      sizes: { small: "649", medium: "1049", large: "1549" },
      image: "/pizzaassets/shahimuglai.jpg",
    },
    {
      name: "Chicken Supreme",
      sizes: { small: "649", medium: "1049", large: "1549" },
      image: "/pizzaassets/supreem.jpg",
    },
    {
      name: "Chicken Tikka",
      sizes: { small: "649", medium: "1049", large: "1549" },
      image: "/pizzaassets/tikkapizza.webp",
    },
    {
      name: "Chicken Fajita",
      sizes: { small: "649", medium: "1049", large: "1549" },
      image: "/pizzaassets/fajita.jpg",
    },
    {
      name: "Chicken Tandoori",
      sizes: { small: "649", medium: "1049", large: "1549" },
      image: "/pizzaassets/tandooripizza.jpg",
    },
    {
      name: "Peri Peri Special",
      sizes: { small: "649", medium: "1049", large: "1549" },
      image: "/pizzaassets/peripizza.jpg",
    },
    {
      name: "Cheese Lover",
      sizes: { small: "649", medium: "1049", large: "1549" },
      image: "/pizzaassets/cheeselover.jpg",
    },
    {
      name: "Hot n Spicy",
      sizes: { small: "649", medium: "1049", large: "1549" },
      image: "/pizzaassets/hotnspicy.jpg",
    },
  ];

  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`bg-black py-6 relative ${isVisible ? "fade-in-up" : ""}`}
      ref={ref}
    >
      <Heading />
      <Dropdown />
      <h2 className="text-2xl pt-10 pb-4 font-extrabold text-white text-center mb-4">
        Pizza
      </h2>
      <div className="max-h-[450px] overflow-y-auto overflow-x-hidden scrollable-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 w-full text-xs font-extrabold text-white max-w-[800px] mx-auto">
          {foodItems.map((item, index) => (
            <article className="flex flex-col items-center" key={index}>
              <div className="relative w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]">
                <Image
                  src={item.image}
                  alt={`Image of ${item.name}`}
                  fill
                  className="object-contain rounded-xl cursor-pointer"
                  onClick={() => handleImageClick(item.image)}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <h3 className="self-center mt-3 text-xl w-full text-center min-w-[120px]">
                {item.name}
              </h3>
              <div className="self-center mt-2 text-yellow-400 w-full">
                {Object.entries(item.sizes).map(([size, price]) => (
                  <p
                    key={size}
                    className="text-lg flex justify-between mt-1 w-full"
                  >
                    <span>{size.charAt(0).toUpperCase() + size.slice(1)}</span>
                    <span className="ml-2">{price}</span>
                  </p>
                ))}
              </div>
              <OrderButton />
            </article>
          ))}
        </div>
      </div>

      <Extratopping />

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={modalImage}
              alt="Full view"
              fill
              className="object-contain rounded-lg"
              sizes="90vw"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Pizza;
