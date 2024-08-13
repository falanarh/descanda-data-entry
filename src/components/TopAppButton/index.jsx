import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const TopAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-porange text-white p-3 rounded-full shadow-lg hover:bg-porange-50 focus:outline-none transition duration-300 ease-in-out"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default TopAppButton;
