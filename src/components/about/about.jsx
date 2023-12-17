import { useEffect, useState } from "react";
import "./about.css";
import { IoInformationCircleOutline } from "react-icons/io5";

export const About = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [textToDisplay, setTextToDisplay] = useState("");

  const detailsText = [
    "Name: Sohaila Yasser",
    "Date of birth: May 20, 2000",
    "Address: Alexandria, Egypt",
    "Email: ysohaila05@gmail.com",
  ];

  const writeText = (index, charIndex) => {
    if (index < detailsText.length) {
      const currentLine = detailsText[index];
      const currentChar = currentLine.charAt(charIndex);

      setTextToDisplay((prevText) => prevText + currentChar);

      if (charIndex + 1 < currentLine.length) {
        setTimeout(() => writeText(index, charIndex + 1), 50);
      } else {
        setTextToDisplay((prevText) => prevText + "\n");
        setTimeout(() => writeText(index + 1, 0), 500);
      }
    } else {
      setIsTextVisible(true);
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerPosition = 100;

    if (scrollPosition >= triggerPosition && !isTextVisible) {
      writeText(0, 0);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTextVisible]);

  return (
    <div className="about">
      <IoInformationCircleOutline className="info-icon" />
      <div className="sub-about">
        <h1 className="about-title">About Me</h1>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            textAlign: "left",
            fontSize: "2rem",
            fontStyle: "Arial",
            fontWeight: "700",
          }}
        >
          {textToDisplay}
        </pre>
      </div>
    </div>
  );
};
