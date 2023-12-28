import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";

const Slider1Card = ({ slides }) => {
  const calculateDiscountedPrice = (originalPrice, discount) => {
    const price = parseFloat(originalPrice);
    const discountPercentage = parseFloat(discount);
    const discountedPrice = price - (price * discountPercentage) / 100;
    return discountedPrice.toFixed(2);
  };

  return (
    <div className="overflow-hidden relative">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-5 transition ease-out duration-500 overflow-hidden">
        {slides.map((slide) => (
          <div key={slide.id} className="card relative overflow-hidden ">
            <div className="flex">
              <div className="relative group">
                <img
                  className="w-[1000px] h-[400px] object-cover transition-transform transform scale-100 group-hover:scale-95"
                  src={slide.image}
                  alt={slide.name}
                />
                <div className="absolute inset-0 bg-slate-600 opacity-0 group-hover:opacity-50 transition-opacity" />
                {slide.discount ? (
                  <div>
                    <p className="bg-orange-600 w-12 h-12 rounded-full  flex justify-center items-center top-6 left-2 absolute">
                      -{slide.discount}%
                    </p>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex">
                        <FaHeart className="rounded-full bg-white text-gray-700 hover:text-orange-600 p-3 h-12 w-12 mx-1" />
                        <TfiReload className="rounded-full bg-white text-gray-700 hover:text-orange-600 p-3 h-12 w-12 mx-1" />
                        <IoIosSearch className="rounded-full bg-white text-gray-700 hover:text-orange-600 p-3 h-12 w-12 mx-1" />
                      </div>
                      <button className="bg-black opacity-45 left-96 bottom-6 absolute w-44 mx-auto p-2 rounded-xl font-bold text-xl text-white">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex">
                      <FaHeart className="rounded-full bg-white text-gray-700 hover:text-orange-600 p-3 h-12 w-12 mx-1" />
                      <TfiReload className="rounded-full bg-white text-gray-700 hover:text-orange-600 p-3 h-12 w-12 mx-1" />
                      <IoIosSearch className="rounded-full bg-white text-gray-700 hover:text-orange-600 p-3 h-12 w-12 mx-1" />
                    </div>
                    <button className="bg-black opacity-45 left-96 bottom-6 absolute w-44 mx-auto p-2 rounded-xl font-bold text-xl text-white">
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
              <div className="p-5 space-y-3 flex flex-col justify-center w-full">
                <h2>{slide.name}</h2>
                <p>{slide.description}</p>
                {slide.discount ? (
                  <div className="flex items-center space-x-2">
                   
                    <p className="text-orange-600 font-bold">
                      ${calculateDiscountedPrice(slide.price, slide.discount)}
                    </p>
                    <p className="text-gray-500 line-through">
                      ${parseFloat(slide.price).toFixed(2)}
                    </p>
                  </div>
                ) : (
                  <p className="text-orange-600 font-bold">
                    ${parseFloat(slide.price).toFixed(2)}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider1Card;
