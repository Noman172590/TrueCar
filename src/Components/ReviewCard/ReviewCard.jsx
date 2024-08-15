import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const ReviewCard = () => {
    return (
        <div className="my-10 p-3">
            <h3 className="text-3xl font-bold text-center mb-10">Get Car Reviews from Our Experts</h3>
            <div>
            <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        1024:{
            slidesPerView: 3,
        },
          
        640: {
          slidesPerView: 2,
        },
      
        320: {
          slidesPerView: 1,
        },
      }}
    >
      <SwiperSlide>
        <div>
        <div className="px-10 card bg-base-100 shadow-xl">
  <figure className="px-8 pt-8">
    <img src="https://static.tcimg.net/vehicles/oem/e935dcb4dee08d6a/2021-Ram-3500.jpg" alt="Shoes" className="rounded-xl w-full h-48" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title mb-3 text-2xl font-medium">2020 Ram 3500</h2>
    <div className="flex justify-center items-center gap-5">
        <figure><img className="w-16 h-16 rounded-full" src="https://static.tcimg.net/authors/c1722665982a5bd0/matt-digiulio.jpg" alt="" /></figure>
        <div>
            <h3 className="text-xl">by MatT DiGiulio</h3>
        </div>
    </div>
  </div>
</div>
        
        </div>
        </SwiperSlide>
      
      <SwiperSlide>
        <div>
        <div className="px-10 card bg-base-100 shadow-xl">
  <figure className="px-8 pt-8">
    <img  src="https://static.tcimg.net/vehicles/oem/4ec7476d6fc4e544/2022-Rolls-Royce-Phantom.jpg" alt="Shoes" className="rounded-xl w-full h-48" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title mb-3 text-2xl font-medium">2022 Rolls-Royce</h2>
    <div className="flex justify-center items-center gap-5">
        <figure><img className="w-16 h-16 rounded-full" src="https://static.tcimg.net/authors/1fda8567e16ba989/mark-holthoff.jpg" alt="" /></figure>
        <div>
            <h3 className="text-xl">by Mark Holthoff</h3>
        </div>
    </div>
  </div>
</div>
        
        </div>
        </SwiperSlide>


      <SwiperSlide>
         <div>
        <div className="px-10 card bg-base-100 shadow-xl">
  <figure className="px-8 pt-8">
    <img  src="https://static.tcimg.net/vehicles/oem/d931af90ab120d6b/2024-Mercedes-Benz-GLS.jpg" alt="Shoes" className="rounded-xl w-full h-48" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title mb-3 text-2xl font-medium">2023-Benz-GLS</h2>
    <div className="flex justify-center items-center gap-5">
        <figure><img className="w-16 h-16 rounded-full" src="https://static.tcimg.net/authors/c76ce4fe104c74d4/warren-clarke.jpg" alt="" /></figure>
        <div>
            <h3 className="text-xl">by Warren Clarke</h3>
        </div>
    </div>
  </div>
</div>
        
        </div>
        </SwiperSlide>


        <SwiperSlide>
        <div>
        <div className="px-10 card bg-base-100 shadow-xl">
  <figure className="px-8 pt-8">
    <img  src="https://static.tcimg.net/vehicles/oem/df9b1326c3d4a103/2021-Audi-S5.jpg" alt="Shoes" className="rounded-xl w-full h-48" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title mb-3 text-2xl font-medium">2021-Audi-S5</h2>
    <div className="flex justify-center items-center gap-5">
        <figure><img className="w-16 h-16 rounded-full" src="https://static.tcimg.net/authors/1fda8567e16ba989/mark-holthoff.jpg" alt="" /></figure>
        <div>
            <h3 className="text-xl">by Mark Holthoff</h3>
        </div>
    </div>
  </div>
</div>
        
        </div>
        </SwiperSlide>


      <SwiperSlide>
        <div>
        <div className="px-10 card bg-base-100 shadow-xl">
  <figure className="px-8 pt-8">
    <img src="https://static.tcimg.net/vehicles/oem/0e9bc8aacd7750ae/2024-Ford-Maverick.jpg" alt="Shoes" className="rounded-xl w-full h-48" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title mb-3 text-2xl font-medium">Ford-Maverick</h2>
    <div className="flex justify-center items-center gap-5">
        <figure><img className="w-16 h-16 rounded-full" src="https://static.tcimg.net/authors/c1722665982a5bd0/matt-digiulio.jpg" alt="" /></figure>
        <div>
            <h3 className="text-xl">by MatT DiGiulio</h3>
        </div>
    </div>
  </div>
</div>
        
        </div>
        </SwiperSlide>

        <SwiperSlide> 
            <div>
        <div className="px-10 card bg-base-100 shadow-xl">
  <figure className="px-8 pt-8">
    <img  src="https://static.tcimg.net/vehicles/oem/b740586ca9dd999b/2023-Acura-MDX.jpg" alt="Shoes" className="rounded-xl w-full h-48" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title mb-3 text-2xl font-medium">2023-Acura-MDX</h2>
    <div className="flex justify-center items-center gap-5">
        <figure><img className="w-16 h-16 rounded-full" src="https://static.tcimg.net/authors/c76ce4fe104c74d4/warren-clarke.jpg" alt="" /></figure>
        <div>
            <h3 className="text-xl">by Warren Clarke</h3>
        </div>
    </div>
  </div>
</div>
        
        </div>
        </SwiperSlide>
      ...
    </Swiper>
            </div>
            
        </div>
    );
};

export default ReviewCard;