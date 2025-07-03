// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Dropdown from "@/Components/Dropdown";
// import Heading from "@/Components/Heading";
// import OrderButton from "@/Components/OrderButton";
// import Beefsteaks from "@/Components/Beefsteaks";

// function Steaks() {
//   const [modalImage, setModalImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef(null);

//   const foodItems = [
//     {
//       name: "Maxican Grilled",
//       sizes: {
//         PKR: "1399",
//       },
//     },
//     {
//       name: "Tarragon Grilled",
//       sizes: {
//         PKR: "1399",
//       },
//     },
//     {
//       name: "Mushroom Grilled", // New food item added
//       sizes: {
//         PKR: "1399",
//       },
//     },
//     {
//       name: "Moroccan Grilled", // New food item added
//       sizes: {
//         PKR: "1399",
//       },
//     },
//     {
//       name: "Smoky BBQ Grilled", // New food item added
//       sizes: {
//         PKR: "1399",
//       },
//     },
//   ];

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
//     <>
//       <section
//         className={`bg-black py-6 relative ${isVisible ? "fade-in-up" : ""}`}
//         ref={ref}
//       >
//         <Heading />
//         <Dropdown />
//         <h2 className="text-2xl pt-10 pb-4 font-extrabold text-white text-center mb-4">
//           Chicken Steaks
//         </h2>
//         <div className="max-h-[450px] md:pl-10">
//           <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-4 w-full text-xs font-extrabold text-white max-w-[1000px] mx-auto">
//             {foodItems.map((item, index) => (
//               <article
//                 className="flex flex-col md:flex-row md:gap-x-14 items-center"
//                 key={index}
//               >
//                 <h3 className="self-center mt-3 text-xl w-full text-center min-w-[200px]">
//                   {item.name}
//                 </h3>
//                 <div className="self-center mt-2">
//                   {Object.entries(item.sizes).map(([size, price]) => (
//                     <p key={size} className="text-lg w-full text-yellow-400 flex justify-between mt-1">
//                       <span>{size.charAt(0).toUpperCase() + size.slice(1)}</span>
//                       <span className="ml-2">{price}</span>
//                     </p>
//                   ))}
//                 </div>
//                 <div >
//                 <OrderButton />
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//         {isModalOpen && (
//           <div
//             className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
//             onClick={closeModal}
//           >
//             <div className="relative">
//               <img
//                 src={modalImage}
//                 alt="Full view"
//                 className="max-w-full max-h-screen rounded-lg"
//               />
//               <button
//                 className="absolute top-2 right-2 text-white text-2xl"
//                 onClick={closeModal}
//               >
//                 &times;
//               </button>
//             </div>
//           </div>
//         )}
//       </section>
//       <Beefsteaks/>
//     </>
//   );
// }

// export default Steaks;



"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Dropdown from "@/Components/Dropdown";
import Heading from "@/Components/Heading";
import OrderButton from "@/Components/OrderButton";
import Beefsteaks from "@/Components/Beefsteaks";

function Steaks() {
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const foodItems = [
    {
      name: "Maxican Grilled",
      sizes: { PKR: "1399" },
      // image: "/steaksassets/maxican.jpg",
    },
    {
      name: "Tarragon Grilled",
      sizes: { PKR: "1399" },
      // image: "/steaksassets/tarragon.jpg",
    },
    {
      name: "Mushroom Grilled",
      sizes: { PKR: "1399" },
      // image: "/steaksassets/mushroom.jpg",
    },
    {
      name: "Moroccan Grilled",
      sizes: { PKR: "1399" },
      // image: "/steaksassets/moroccan.jpg",
    },
    {
      name: "Smoky BBQ Grilled",
      sizes: { PKR: "1399" },
      // image: "/steaksassets/bbq.jpg",
    },
  ];

  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
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
    <>
      <section
        className={`bg-black py-6 relative ${isVisible ? "fade-in-up" : ""}`}
        ref={ref}
      >
        <Heading />
        <Dropdown />
        <h2 className="text-2xl pt-10 pb-4 font-extrabold text-white text-center mb-4">
          Chicken Steaks
        </h2>
        <div className="max-h-[450px] md:pl-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 w-full text-xs font-extrabold text-white max-w-[1000px] mx-auto">
            {foodItems.map((item, index) => (
              <article
                className="flex flex-col md:flex-row md:gap-x-10 items-center"
                key={index}
              >
                <div
                  className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] cursor-pointer"
                  onClick={() => handleImageClick(item.image)}
                >
                  <Image
                    src={item.image}
                    alt={`Image of ${item.name}`}
                    fill
                    className="object-contain rounded-xl"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                </div>
                <div className="flex flex-col justify-center items-center md:items-start mt-3 md:mt-0">
                  <h3 className="text-xl text-center md:text-left min-w-[200px]">
                    {item.name}
                  </h3>
                  <div className="mt-2">
                    {Object.entries(item.sizes).map(([size, price]) => (
                      <p
                        key={size}
                        className="text-lg text-yellow-400 flex justify-between"
                      >
                        <span>{size}</span>
                        <span className="ml-2">{price}</span>
                      </p>
                    ))}
                  </div>
                  <div className="mt-3">
                    <OrderButton />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

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

      <Beefsteaks />
    </>
  );
}

export default Steaks;
