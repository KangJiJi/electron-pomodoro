import React, { useEffect } from "react";

const EasterEgg = () => {
  const shwoInfo = () => {
    console.log("안녕하세요! 저는 프론트엔드 개발자를 지망하는 학생이에요.");
    console.log("심심하시면 제 깃허브에 놀러오세요!! :)");
    console.log("https://github.com/KangJiJi");
    console.log("Have a nice day~");
    console.log("좋은 하루를 보내세요~");
    console.log("祝你度过愉快的一天~");
  };

  useEffect(shwoInfo, []);

  return <></>;
};

export default EasterEgg;
