import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Slide from "@mui/material/Slide";

const HeroSection = ({ scrollToTutorial, scrollToProgress }) => {
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const [isSdaLogoLoaded, setIsSdaLogoLoaded] = useState(false);
  const [showH2, setShowH2] = useState(false);
  const [showH1, setShowH1] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const containerRef = React.useRef(null);

  useEffect(() => {
    if (isLogoLoaded && isSdaLogoLoaded) {
      setTimeout(() => setShowH2(true), 500);
      setTimeout(() => setShowH1(true), 3500);
      setTimeout(() => setShowParagraph(true), 7000);
      setTimeout(() => setShowButtons(true), 8000);
    }
  }, [isLogoLoaded, isSdaLogoLoaded]);

  // useEffect(() => {
  //   if (containerRef.current) {
  //     containerRef.current.addEventListener("scroll", handleScroll);
  //   }

  //   return () => {

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 h-screen-minus-64">
      <div className="flex items-center gap-3">
        {/* Skeleton for the first image */}
        {!isLogoLoaded && <Skeleton width={100} height={100} circle />}
        <img
          src="/images/logo_dc.png"
          className={`w-[100px] h-[100px] ${isLogoLoaded ? "block" : "hidden"}`}
          alt="Desa Cantik"
          onLoad={() => setIsLogoLoaded(true)}
        />

        {/* Skeleton for the second image */}
        {!isSdaLogoLoaded && <Skeleton width={100} height={100} circle />}
        <img
          src="/images/sda-logo.png"
          className={`w-[100px] h-[100px] ${
            isSdaLogoLoaded ? "block" : "hidden"
          }`}
          alt="Sidoarjo"
          onLoad={() => setIsSdaLogoLoaded(true)}
        />
      </div>

      {showH2 && (
        <h2 className="px-4 py-2 text-base text-xl font-semibold bg-porange rounded-xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Desa Simoangin-angin | Pendataan UMKM 2024")
                .pauseFor(2500)
                .start();
            }}
            options={{
              autoStart: true,
              loop: false,
              delay: 40,
              cursor: "",
            }}
          />
        </h2>
      )}

      {showH1 && (
        <h1 className="text-3xl italic font-semibold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Selamat datang di Entri Data Desa Cantik Sidoarjo, Falana!"
                )
                .pauseFor(2500)
                .start();
            }}
            options={{
              autoStart: true,
              loop: false,
              delay: 40,
            }}
          />
        </h1>
      )}

      {showParagraph && (
        <Slide in={true} container={containerRef.current}>
          <p className="text-[20px] text-center mx-[10%]">
            Website ini berfungsi sebagai aplikasi untuk melakukan entri data
            oleh Petugas Pencacah Lapangan (PCL) terkait dengan pendataan pelaku
            UMKM tahun 2024 di desa Simoangain-angin, Wonoayu, Sidoarjo.
          </p>
        </Slide>
      )}

      {showButtons && (
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <div className="flex items-center gap-5">
            <button
              onClick={scrollToTutorial}
              className="cursor-pointer bg-pdarkblue px-3 py-2 rounded-md text-base tracking-wider shadow-xl animate-bounce hover:animate-none font-asap font-semibold text-[16px] flex gap-1"
            >
              Mulai Sekarang
              <svg
                className="w-5 h-5"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
            <button
              onClick={scrollToProgress}
              className="bg-pgreen hover:bg-base border-2 border-pgreen rounded-lg text-base px-4 py-2 hover:border-pgreen hover:text-pgreen cursor-pointer transition text-[16px] font-semibold"
            >
              Pencapaian Saya
            </button>
          </div>
        </Slide>
      )}
    </div>
  );
};

export default HeroSection;
