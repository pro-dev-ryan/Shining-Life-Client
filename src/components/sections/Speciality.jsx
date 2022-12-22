import React from "react";
import icon1 from "../../assets/Speciality/self-Paced.png";
import icon2 from "../../assets/Speciality/Remote-Learning.png";
import icon3 from "../../assets/Speciality/One-Time.png";
import icon4 from "../../assets/Speciality/Study-anywhere.png";
import icon5 from "../../assets/Speciality/Google-Meet.png";
import icon6 from "../../assets/Speciality/self-improvement.png";

const Speciality = () => {
  const cards = [
    {
      id: 1,
      img: icon1,
      title: "Self-Paced",
      desc: "",
    },
    {
      id: 2,
      img: icon2,
      title: "Remote Learning",
      desc: "",
    },
    {
      id: 3,
      img: icon3,
      title: "One-Time",
      desc: "",
    },
    {
      id: 4,
      img: icon4,
      title: "Study Anywhere",
      desc: "",
    },
    {
      id: 5,
      img: icon5,
      title: "Google-Meet",
      desc: "",
    },
    {
      id: 6,
      img: icon6,
      title: "Self-Development",
      desc: "",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3  mx-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-full lg:p-3 md:p-2 p-1 bg-white text-center rounded"
        >
          <div className="mb-2 md:mb-3 my-2 lg:mb-5">
            <img
              src={card.img}
              className="lg:h-20 mx-auto md:h-14 h-14"
              alt="#"
            />
          </div>
          <div>
            <h4 className="text-xl font-heading text-gray-700 font-semibold">
              {card.title}
            </h4>
            <p className="text-gray-600 mx-5 font-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              quis vero quas consequuntur laboriosam voluptas?
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Speciality;
