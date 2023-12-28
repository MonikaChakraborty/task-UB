import { useState } from "react";
import Slider1Card from "./Slider1Card";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

const Slider1 = () => {

  const slides = [
    {
      id: 1,
      image: "./slider1/DJIMavic3Drone.jpg",
      name: "DJI Mavic 3 Drone",
      price: "$499",
      description: "Capture breathtaking aerial footage with the Mavic 3, equipped with a Hasselblad camera for stunning image quality",
    },
    {
      id: 2,
      image: "./slider1/GoogleNestWifiRouter.jpg",
      name: "Google Nest Wifi Router",
      price: "$599",
      description:
        "Blanket your home in seamless Wi-Fi coverage with the Nest Wifi router",
    },
    {
      id: 3,
      image: "./slider1/samsung-galaxy-s23-ultra.webp",
      name: "Samsung Galaxy S23 Ultra",
      price: "$699",
      description:
        "This flagship smartphone boasts cutting-edge specs, including a stunning AMOLED display and a versatile camera system",
    },
    {
      id: 4,
      image: "./slider1/SonyPlayStation5.avif",
      name: "Sony PlayStation 5",
      price: "$799",
      description:
        "Experience next-generation gaming with the PS5, featuring immersive haptic feedback and stunning visuals",
    },
    {
      id: 5,
      image: "./slider1/Samsung-Galaxy-Watch-5-Pro.jpg",
      name: "Samsung Galaxy Watch5 Pro",
      price: "$899",
      description:
        "Track your health and fitness like never before with the Galaxy Watch5 Pro",
    },
    {
      id: 6,
      image: "./slider1/FujifilmInstaxMini11InstantCamera.webp",
      name: "Fujifilm Instax Mini 11 Instant Camera",
      price: "$999",
      description: " Capture life's fleeting moments in an instant with this fun and easy-to-use camera",
    },
    {
      id: 7,
      image: "./slider1/AnkerNebulaCapsuleSmartMiniProjector.webp",
      name: "Anker Nebula Capsule Smart Mini Projector",
      price: "$1099",
      description:
        "Turn any space into a home theater with this portable projector, easy to stream movies, shows, or even video games",
    },
    {
      id: 8,
      image: "./slider1/BoseQuietComfort35IIHeadPhones.webp",
      name: "Bose QuietComfort 35 II",
      price: "$1199",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(slides.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleSlides = slides.slice(startIndex, startIndex + itemsPerPage);

  const transformValue = `translateX(-${(100 / itemsPerPage) * currentPage * 0.02}%)`;

  console.log('transformValue', transformValue);

  console.log('currentPage', currentPage);

  return (
    <div className="flex justify-center items-center w-[90%] px-5 mx-auto transition-transform ease-out duration-700 overflow-hidden relative" 
    style={{
      transform: transformValue,
    }}>
      <button onClick={prevSlide}>
        <FaChevronCircleLeft
          size={40}
          className="hover:text-orange-600 hover:bg-white bg-gray-500 rounded-full text-white"
        />
      </button>
      <Slider1Card slides={visibleSlides} />
      <button onClick={nextSlide}>
        <FaChevronCircleRight
          size={40}
          className="hover:text-orange-600 hover:bg-white bg-gray-500 rounded-full text-white"
        />
      </button>
    </div>
  );
};

export default Slider1;