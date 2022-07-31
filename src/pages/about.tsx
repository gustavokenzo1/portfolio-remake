import { NextPage } from "next";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import profile_picture from "../../public/profile_picture.webp";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div className="max-w-screen min-h-screen h-screen flex flex-col items-center justify-center">
      <Canvas>
        <Stars
          radius={100}
          depth={50}
          count={1000}
          factor={7}
          saturation={0}
          fade={true}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </Canvas>
      <div className="absolute z-10 w-3/4 backdrop-blur-sm rounded bg-slate-800 bg-opacity-20 p-10 flex flex-col justify-center">
        <h1 className="text-center text-white text-2xl font-bold">Sobre</h1>
        <div className="flex w-full flex-row items-center justify-between">
          <div className="w-1/4 m-20">
            <Image
              src={profile_picture}
              alt="Meu rosto"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="w-3/4">
            <p className="text-start text-white text-xl mt-16">
              Olá, meu nome é Gustavo Kenzo Araki Takechi! Sempre gostei de
              atividades que envolvam raciocínio lógico (caso não tenha
              percebido, meu hobby favorito é montar cubo mágico), então quando
              comecei a estudar programação, logo me identifiquei. Sou
              desenvolvedor web, e gosto de estudar tanto o Back-end quanto o
              Front-end, estando focado, atualmente, no Front-end. Sou estudante
              de Engenharia de Software na Universidade de Brasília (UnB), e
              membro da Orc&apos;estra Gamificação, Empresa Júnior de Engenharia
              de Software da UnB.
            </p>
            <p className="text-start text-white text-xl mt-8">
              Atualmente, estou focado em desenvolver aplicações utilizando
              TypeScript, React, Next.js, Node.js, Express, MongoDB, PostgreSQL
              Prisma, TypeORM, Docker, Git, GitHub, entre outros. Além disso,
              sou fascinado pela área de Inteligência Artificial, e sempre tento
              estudar sobre ela.
            </p>
          </div>
        </div>
        <Link href="/experience">
          <div className="self-center w-1/4">
            <button className="mt-10 mb-2 w-full text-white font-bold text-center hover:bg-slate-100 hover:text-slate-800 transition-all py-2 px-2 rounded">
              Ver Experiência
            </button>
            <div className="flex-grow h-[2px] bg-slate-100 mb-2" />
          </div>
        </Link>
        <Link href="/">
          <div className="self-center w-1/4">
            <button className="mt-10 mb-2 w-full text-white font-bold text-center hover:bg-slate-100 hover:text-slate-800 transition-all py-2 px-2 rounded">
              Voltar para a página principal
            </button>
            <div className="flex-grow h-[2px] bg-slate-100 mb-2" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
