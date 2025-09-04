import style from "./AsideSkills.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { skillsItems } from "../../../../data/skills.jsx";

const AsideSkills = ({ className }) => {
  return (
    <div className={`${style.aside} ${className}`}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        spaceBetween={1}
        loop={true}
        breakpoints={{
          350: {
            slidesPerView: 3,
          },
          500: {
            slidesPerView: 5,
          },
          750: {
            slidesPerView: 6,
          },
          870: {
            slidesPerView: 7,
          },
          1000: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {skillsItems.map((item) => (
          <SwiperSlide key={item.name}>
            <div className={style.skill_item}>
              <svg
                className={style.icon}
                height="35"
                width="35"
                fill={item.color}
              >
                <use href={`/Image/symbol-defs.svg#${item.icon_style}`}></use>
              </svg>
              <p className={style.title_skill}>{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AsideSkills;
