import React from "react";
import mobile1 from "./img/karavan-social-networking-app-screen.png";
import mobile2 from "./img/social-networking-app-case-study.png";
import mobile3 from "./img/developers-for-social-media-app.png";
import mobile4 from "./img/karavan_2.png";
import mobile5 from "./img/karavan-social-networking-app-screen-2.png";

export default function Page5() {
  return (
    <div className="page5 w-full h-screen bg-blue-400 relative overflow-hidden">
      <div className="flex">
        <img
          src={mobile1}
          alt="mobile img"
          className="absolute h-[390px] top-[-15%] left-[16%]"
        ></img>
        <img
          src={mobile2}
          alt="mobile img"
          className="absolute h-[400px] top-[-5%] left-[42%]"
        ></img>
      </div>
      <img
        src={mobile3}
        alt="mobile img"
        className="absolute h-[450px] right-[1%] top-[20%]"
      ></img>
      <div className="flex">
        <img
          src={mobile4}
          alt="mobile img"
          className="h-[390px] absolute bottom-[-13%] left-[16%]"
        ></img>
        <img
          src={mobile5}
          alt="mobile img"
          className="h-[390px] absolute bottom-[-25%] left-[42%]"
        ></img>
      </div>
    </div>
  );
}
