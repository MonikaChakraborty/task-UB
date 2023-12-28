import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Slider1Card = ({ slides }) => {
  const calculateDiscountedPrice = (originalPrice, discount) => {
    const price = parseFloat(originalPrice);
    const discountPercentage = parseFloat(discount);
    const discountedPrice = price - (price * discountPercentage) / 100;
    return discountedPrice.toFixed(2);
  };

  return (
    <div className="overflow-hidden relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 transition ease-out duration-500 overflow-hidden mt-10">
        {slides.map((slide) => (
          <div key={slide.id} className="card relative overflow-hidden ">
            <div className="flex">
              <div className="relative group ">
                <img
                  className="lg:w-[1000px] w-[600px] h-[200px]  lg:h-[400px] object-cover transition-transform transform scale-100 group-hover:scale-95"
                  src={slide.image}
                  alt={slide.name}
                />
                <div className="absolute inset-0 bg-slate-600 opacity-0 group-hover:opacity-50 transition-opacity" />
                {slide.discount ? (
                  <div>
                    <p className="bg-orange-600 text-white w-8 h-8 lg:w-12 lg:h-12 rounded-full md:text-base text-sm flex justify-center items-center top-6 left-2 absolute">
                      -{slide.discount}%
                    </p>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex">
                        <FaHeart className="rounded-full bg-white text-gray-700 hover:text-orange-600 w-6 h-6 md:h-8 md:w-8 p-1  md:p-1 lg:p-3 lg:h-12 lg:w-12 mx-1" />
                        <TfiReload className="rounded-full bg-white text-gray-700 hover:text-orange-600 w-6 h-6 md:h-8 md:w-8 p-1  md:p-1 lg:p-3 lg:h-12 lg:w-12 mx-1" />
                        <IoIosSearch className="rounded-full bg-white text-gray-700 hover:text-orange-600 w-6 h-6 md:h-8 md:w-8 p-1  md:p-1 lg:p-3 lg:h-12 lg:w-12 mx-1" />
                      </div>

                      <button className="bg-black opacity-45 lg:left-96 md:left-40 left-36 bottom-2 lg:bottom-6 absolute lg:w-44 w-32 mx-auto p-1 lg:p-2 rounded-xl font-bold lg:text-xl text-white">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex">
                      <FaHeart className="rounded-full bg-white text-gray-700 hover:text-orange-600 w-6 h-6 md:h-8 md:w-8 p-1  md:p-1 lg:p-3 lg:h-12 lg:w-12 mx-1" />
                      <TfiReload className="rounded-full bg-white text-gray-700 hover:text-orange-600 w-6 h-6 md:h-8 md:w-8 p-1  md:p-1 lg:p-3 lg:h-12 lg:w-12 mx-1"  />
                      <IoIosSearch className="rounded-full bg-white text-gray-700 hover:text-orange-600 w-6 h-6 md:h-8 md:w-8 p-1  md:p-1 lg:p-3 lg:h-12 lg:w-12 mx-1"  />
                    </div>
                    <button className="bg-black opacity-45 lg:left-96 md:left-40 left-36 bottom-2 lg:bottom-6 absolute lg:w-44 w-32 mx-auto p-1 lg:p-2 rounded-xl font-bold lg:text-xl text-white">
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
              <div className="lg:p-5 ml-4 py-12 lg:space-y-3 space-y-1 flex flex-col justify-center lg:w-full ">
              <Rating style={{ maxWidth: 100 }} value={slide.rating} readOnly />
                <h2 className="lg:text-lg text-base text-gray-800">{slide.name}</h2>
               
                {slide.discount ? (
                  <div className="flex items-center space-x-2">
                   
                    <p className="text-red-500 lg:text-xl font-bold">${calculateDiscountedPrice(slide.price, slide.discount)}</p>

                    <p className="text-gray-500 line-through">${slide.price}</p>
                  </div>
                ) : (
                  <p className="text-red-500 lg:text-xl font-bold">${parseFloat(slide.price).toFixed(2)}</p>
                )}
                 <p className="text-gray-400 lg:text-base text-sm">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider1Card;
