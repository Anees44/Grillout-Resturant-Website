// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import OrderButton from "./OrderButton";

// function Beefsteaks() {
//   const [modalImage, setModalImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef(null);

//   const foodItems = [
//     {
//       name: "Maxican Grilled",
//       sizes: {
//         PKR: "1999",
//       },
//     },
//     {
//       name: "Tarragon Grilled",
//       sizes: {
//         PKR: "1999",
//       },
//     },
//     {
//       name: "Mushroom Grilled", // New food item added
//       sizes: {
//         PKR: "1999",
//       },
//     },
//     {
//       name: "Moroccan Grilled", // New food item added
//       sizes: {
//         PKR: "1999",
//       },
//     },
//     {
//       name: "Smoky BBQ Grilled", // New food item added
//       sizes: {
//         PKR: "1999",
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
//         className={`bg-black relative ${isVisible ? "fade-in-up" : ""}`}
//         ref={ref}
//       >
//         <h2 className="text-2xl pt-10 pb-4 font-extrabold text-white text-center mb-4">
//           Beef Steaks
//         </h2>
//         <div className="max-h-[450px] pb-60 md:pl-10">
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
//     </>
//   );
// }

// export default Beefsteaks;



"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import OrderButton from "./OrderButton";

function Beefsteaks() {
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const foodItems = [
    {
      name: "Maxican Grilled",
      sizes: { PKR: "1999" },
      image: "/beefsteaks/maxican.jpg", // placeholder, update paths as needed
    },
    {
      name: "Tarragon Grilled",
      sizes: { PKR: "1999" },
      image: "/beefsteaks/tarragon.jpg",
    },
    {
      name: "Mushroom Grilled",
      sizes: { PKR: "1999" },
      image: "/beefsteaks/mushroom.jpg",
    },
    {
      name: "Moroccan Grilled",
      sizes: { PKR: "1999" },
      image: "/beefsteaks/moroccan.jpg",
    },
    {
      name: "Smoky BBQ Grilled",
      sizes: { PKR: "1999" },
      image: "/beefsteaks/smokybbq.jpg",
    },
  ];

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
        className={`bg-black relative ${isVisible ? "fade-in-up" : ""}`}
        ref={ref}
      >
        <h2 className="text-2xl pt-10 pb-4 font-extrabold text-white text-center mb-4">
          Beef Steaks
        </h2>
        <div className="max-h-[450px] pb-60 md:pl-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-4 w-full text-xs font-extrabold text-white max-w-[1000px] mx-auto">
            {foodItems.map((item, index) => (
              <article
                className="flex flex-col md:flex-row md:gap-x-14 items-center"
                key={index}
              >
                {/* Optional image for each steak */}
                <div
                  className="relative w-[120px] h-[120px] cursor-pointer"
                  onClick={() => {
                    if (item.image) setModalImage(item.image);
                    setIsModalOpen(true);
                  }}
                >
                  <Image
                    src={item.image}
                    alt={`Image of ${item.name}`}
                    fill
                    className="rounded-lg object-cover"
                    sizes="120px"
                  />
                </div>

                <h3 className="self-center mt-3 text-xl w-full text-center min-w-[200px]">
                  {item.name}
                </h3>
                <div className="self-center mt-2">
                  {Object.entries(item.sizes).map(([size, price]) => (
                    <p
                      key={size}
                      className="text-lg w-full text-yellow-400 flex justify-between mt-1"
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

        {/* Modal for zoom image */}
        {isModalOpen && modalImage && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            onClick={closeModal}
          >
            <div className="relative w-[90%] h-[90%]">
              <Image
                src={modalImage}
                alt="Zoomed steak"
                fill
                className="rounded-lg object-contain"
                sizes="90vw"
              />
              <button
                className="absolute top-2 right-4 text-white text-3xl"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Beefsteaks;
