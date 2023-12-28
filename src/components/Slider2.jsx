import { useState } from "react";
import Slider2Card from "./Slider2Card";
import sideImg from "../assets/slider2.jpg";

const Slider2 = () => {
  const slides = [
    {
      id: 1,
      image: "./slider1/DJIMavic3Drone.jpg",
      name: "DJI Mavic 3 Drone",
      price: "499",
      discount: '5',
      rating: 3.5
    },
    {
      id: 2,
      image: "./slider1/GoogleNestWifiRouter.jpg",
      name: "Google Nest Wifi Router",
      price: "599",
      discount: '7',
      rating: 4.5
    },
    {
      id: 3,
      image: "./slider1/samsung-galaxy-s23-ultra.webp",
      name: "Samsung Galaxy S23 Ultra",
      price: "699",
      rating: 0.0
    },
    {
      id: 4,
      image: "./slider1/SonyPlayStation5.avif",
      name: "Sony PlayStation 5",
      price: "799",
      discount: "10",
      rating: 4.0
    },
    {
      id: 5,
      image: "./slider1/Samsung-Galaxy-Watch-5-Pro.jpg",
      name: "Samsung Galaxy Watch5",
      price: "899",
      rating: 2.0
    },
    {
      id: 6,
      image: "./slider1/FujifilmInstaxMini11InstantCamera.webp",
      name: "Fujifilm Instant Camera",
      price: "999",
      rating: 0.0
    },
    {
      id: 7,
      image: "./slider1/AnkerNebulaCapsuleSmartMiniProjector.webp",
      name: "Anker Smart Mini Projector",
      price: "1099",
      discount: "8",
      rating: 3.0
    },
    {
      id: 8,
      image: "./slider1/BoseQuietComfort35IIHeadPhones.webp",
      name: "Bose QuietComfort 35 II",
      price: "1199",
      rating: 5.0
    },
    {
      id: 9,
      image: "./slider1/DJIMavic3Drone.jpg",
      name: "DJI Mavic 3 Drone",
      price: "499",
      discount: "5",
      rating: 4.5
    },
  ];
  const itemsPerPage = 3;
  const [startX, setStartX] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(slides.length / itemsPerPage);

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsSwiping(true);
  };

  const handleMouseMove = (e) => {
    if (!isSwiping) return;

    const deltaX = e.clientX - startX;
    const threshold = 50; // Adjust this threshold as needed

    if (deltaX > threshold) {
      setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
      setIsSwiping(false);
    } else if (deltaX < -threshold) {
      setCurrentPage((prevPage) => Math.min(totalPages - 1, prevPage + 1));
      setIsSwiping(false);
    }
  };

  const handleMouseUp = () => {
    setIsSwiping(false);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleSlides = slides.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex justify-center items-center mt-8">
      <div
        className="flex justify-center gap-12 transition-transform ease-in-out"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ userSelect: "none" }} 
      >
        <img className="object-cover w-[600px] h-[89vh]" src={sideImg} alt="" />
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold ">Best Sellers</h2>
            <div className="navigation-dots flex gap-2">
              {[...Array(totalPages).keys()].map((page) => (
                <div
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-4 h-4 mt-2 rounded-full cursor-pointer transition ${
                    page === currentPage ? "bg-orange-600 w-24 h-4" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="slider-container">
            <Slider2Card slides={visibleSlides} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
