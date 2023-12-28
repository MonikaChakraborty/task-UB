import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Slider2Card = ({ slides }) => {
  return (
    <div className="slider2-card-container mt-3 ">
      <div className="grid grid-cols-1 gap-8">
        {slides.map((slide) => (
          <div key={slide.id} className="slider2-card">
            <div className="flex ">
              <img
                className="w-[200px] h-[200px]"
                src={slide.image}
                alt={slide.name}
              />
              <div className="w-[250px] space-y-3 flex flex-col justify-center items-center">
                <Rating style={{ maxWidth: 100 }} value={slide.rating} readOnly />
                <h2>{slide.name}</h2>
             <div className="flex gap-2">
             {slide.discount ? (
                  <>
                   
                    <p className="text-orange-600 font-bold">
                      ${(
                        Number(slide.price) -
                        (slide.discount * Number(slide.price)) / 100
                      ).toFixed(2)}
                    </p>

                    <p className="text-gray-500 line-through">
                      ${Number(slide.price).toFixed(2)}
                    </p>
                  </>
                ) : (
                  <p>${Number(slide.price).toFixed(2)}</p>
                )}
             </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider2Card;
