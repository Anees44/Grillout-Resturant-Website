// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Dropdown from "@/Components/Dropdown";
// import Heading from "@/Components/Heading";
// import OrderButton from "@/Components/OrderButton";

// function Appetizer() {
//     const [modalImage, setModalImage] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isVisible, setIsVisible] = useState(false);
//     const ref = useRef(null);

//     const foodItems = [
//         {
//             name: "Plain Fries",
//             sizes: {
//                 small: "______",
//                 medium: "299",
//                 large: "379",
//             },
//             image: "/appetizerassets/frenchfries.jpg",
//         },
//         {
//             name: "Mayo Fries",
//             sizes: {
//                 small: "______",
//                 medium: "379",
//                 large: "479",
//             },
//             image: "/appetizerassets/mayofries.jpg",
//         },
//         {
//             name: "Cajun Fried Chicken",
//             sizes: {
//                 medium: "______",
//                 large: "769",
//             },
//             image: "/appetizerassets/cajun-fried-chicken.jpg",
//         },
//         {
//             name: "Nuggets",
//             sizes: {
//                 small: "______",
//                 "5 pcs": "349",
//                 "10 pcs": "689",
//             },
//             image: "/appetizerassets/nuggets.jpg",
//         },
//     ];

//     const handleImageClick = (image) => {
//         setModalImage(image);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setModalImage(null);
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             if (ref.current) {
//                 const rect = ref.current.getBoundingClientRect();
//                 if (rect.top < window.innerHeight && rect.bottom >= 0) {
//                     setIsVisible(true);
//                     window.removeEventListener("scroll", handleScroll);
//                 }
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         handleScroll();

//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <section
//             className={`bg-black py-6 relative ${isVisible ? "fade-in-up" : ""}`}
//             ref={ref}
//         >
//             <Heading/>
//             <Dropdown />
//             <h2 className="text-2xl pt-10 pb-4 font-extrabold text-white text-center mb-4">Appetizers</h2>
//             <div className="max-h-[450px]">
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 w-full text-xs font-extrabold text-white max-w-[800px] mx-auto">
//                     {foodItems.map((item, index) => (
//                         <article className="flex flex-col items-center" key={index}>
//                             <img
//                                 loading="lazy"
//                                 src={item.image}
//                                 alt={`Image of ${item.name}`}
//                                 className="object-contain rounded-xl aspect-square w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] cursor-pointer"
//                                 onClick={() => handleImageClick(item.image)}
//                             />
//                             <h3 className="self-center mt-3 text-xl w-full text-center min-w-[120px]">
//                                 {item.name}
//                             </h3>
//                             <div className="self-center mt-2">
//                                 {Object.entries(item.sizes).map(([size, price]) => (
//                                     <p key={size} className="text-lg w-full text-yellow-400 flex justify-between mt-1">
//                                         <span>{size.charAt(0).toUpperCase() + size.slice(1)}</span>
//                                         <span className="ml-2">{price}</span>
//                                     </p>
//                                 ))}
//                             </div>
//                             <OrderButton/>
//                         </article>
//                     ))}
//                 </div>
//             </div>
//             {isModalOpen && (
//                 <div
//                     className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
//                     onClick={closeModal}
//                 >
//                     <div className="relative">
//                         <img
//                             src={modalImage}
//                             alt="Full view"
//                             className="max-w-full max-h-screen rounded-lg"
//                         />
//                         <button
//                             className="absolute top-2 right-2 text-white text-2xl"
//                             onClick={closeModal}
//                         >
//                             &times;
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// }

// export default Appetizer;


"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Dropdown from "@/Components/Dropdown";
import Heading from "@/Components/Heading";
import OrderButton from "@/Components/OrderButton";

function Appetizer() {
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const foodItems = [
    {
      name: "Plain Fries",
      sizes: {
        small: "______",
        medium: "299",
        large: "379",
      },
      image: "/appetizerassets/frenchfries.jpg",
    },
    {
      name: "Mayo Fries",
      sizes: {
        small: "______",
        medium: "379",
        large: "479",
      },
      image: "/appetizerassets/mayofries.jpg",
    },
    {
      name: "Cajun Fried Chicken",
      sizes: {
        medium: "______",
        large: "769",
      },
      image: "/appetizerassets/cajun-fried-chicken.jpg",
    },
    {
      name: "Nuggets",
      sizes: {
        small: "______",
        "5 pcs": "349",
        "10 pcs": "689",
      },
      image: "/appetizerassets/nuggets.jpg",
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
    <section
      className={`bg-black py-6 relative ${isVisible ? "fade-in-up" : ""}`}
      ref={ref}
    >
      <Heading />
      <Dropdown />
      <h2 className="text-2xl pt-10 pb-4 font-extrabold text-white text-center mb-4">
        Appetizers
      </h2>
      <div className="max-h-[450px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 w-full text-xs font-extrabold text-white max-w-[800px] mx-auto">
          {foodItems.map((item, index) => (
            <article className="flex flex-col items-center" key={index}>
              <div
                className="relative w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] cursor-pointer"
                onClick={() => handleImageClick(item.image)}
              >
                <Image
                  src={item.image}
                  alt={`Image of ${item.name}`}
                  fill
                  className="rounded-xl object-contain"
                  sizes="(max-width: 768px) 80px, (max-width: 1024px) 150px, 180px"
                />
              </div>
              <h3 className="self-center mt-3 text-xl w-full text-center min-w-[120px]">
                {item.name}
              </h3>
              <div className="self-center mt-2">
                {Object.entries(item.sizes).map(([size, price]) => (
                  <p
                    key={size}
                    className="text-lg w-full text-yellow-400 flex justify-between mt-1"
                  >
                    <span>
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </span>
                    <span className="ml-2">{price}</span>
                  </p>
                ))}
              </div>
              <OrderButton />
            </article>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-full max-h-screen w-[90%] h-[90%]">
            <Image
              src={modalImage}
              alt="Full view"
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
  );
}

export default Appetizer;
