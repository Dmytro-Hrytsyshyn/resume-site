import style from "./AsideSkills.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const AsideSkills = ({ className }) => {
  const skillsItems = [
    { name: "HTML", icon_style: "html", color: "#FC7600" },
    { name: "CSS/SCSS", icon_style: "css", color: "#046cff" },
    { name: "JavaScript", icon_style: "js", color: "#ffe043" },
    { name: "React 2.0", icon_style: "react", color: "#0bcaff" },
    { name: "TypeScript", icon_style: "ts", color: "#2985e2" },
    { name: "Git", icon_style: "git", color: "#FC7600" },
    { name: "Figma", icon_style: "figma", color: "#ff380b" },
    { name: "npm", icon_style: "npm", color: "#983a25" },
  ];

  return (
    <div className={`${style.aside} ${className}`}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        spaceBetween={15}
        loop={true}
        breakpoints={{
          350: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
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
                <use href={`./Image/symbol-defs.svg#${item.icon_style}`}></use>
              </svg>
              <p>{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AsideSkills;
