import type { GetStaticPaths, NextPage } from "next";
import { Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Button } from "../components/Button";

const Home: NextPage = () => {
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    window.addEventListener("wheel", () => {
      setScrollCount((prevCount) =>
        prevCount <= 50 ? prevCount + 1 : prevCount
      );
    });
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-start">
      <div
        className={`h-screen w-screen absolute ${
          scrollCount > 40 ? "z-0" : "z-10"
        }`}
      >
        {/* 3D model of the cube, made on Spline */}
        <Spline scene="https://prod.spline.design/SYuwHUN4WVBBTqA3/scene.splinecode" />
      </div>
      {scrollCount < 10 && (
        <h1 className="self-center absolute bottom-10 text-md animate-pulse duration-500">
          Por favor, aguarde o carregamento da página. Depois, arraste para
          baixo para começar.
        </h1>
      )}
      <div className="relative left-20 w-1/2 max-w-md mb-10">
        <motion.h1
          className="text-4xl font-bold"
          style={{
            opacity:
              scrollCount > 40 ? 1 : scrollCount > 25 ? scrollCount / 100 : 0,
            marginTop: scrollCount * 2,
          }}
        >
          Olá, seja bem-vindo(a) ao meu portfólio!
        </motion.h1>
        <div className="flex flex-col w-1/2 mt-8">
          <Button scrollCount={scrollCount} url="/about" text="Sobre" />
          <Button
            scrollCount={scrollCount}
            url="/experience"
            text="Experiência"
          />
          <Button
            scrollCount={scrollCount}
            url="/certificates"
            text="Certificados"
          />
          <Button scrollCount={scrollCount} url="/projects" text="Projetos" />
        </div>
      </div>
    </div>
  );
};

export default Home;
