import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import orc from "../../public/orc.webp";
import unb from "../../public/unb.webp";

const Experience: NextPage = () => {
  return (
    <div className="max-w-screen min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10">Experiência</h1>
      <div className="w-1/2 bg-slate-800 text-slate-100 p-8 rounded mt-20">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-bold text-xl">Orc&apos;estra Gamificação</h1>
            <p className="mt-8">- Gerente de Capacitação (Atualmente)</p>
            <p className="mt-4">- Assessors de Projetos (Atualmente)</p>
          </div>
          <Image
            src={orc}
            alt="Logo da Orc'estra Gamificação, fundo verde e uma letra O utilizando um capacete de Orc"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="w-1/2 bg-slate-800 text-slate-100 p-8 rounded mt-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-bold text-xl">Universidade de Brasília</h1>
            <p className="mt-8">
              - Graduando em Engenharia de Software (Atualmente)
            </p>
            <p className="mt-4">
              - Monitor da disciplina de Algoritmos e Programação de
              Computadores
            </p>
          </div>
          <Image
            src={unb}
            alt="Logo da Universidade de Brasília, azul e verde com o formato do plano piloto (avião)"
            width={200}
            height={100}
          />
        </div>
      </div>
      <div className="w-full mb-10 flex flex-col">
        <Link href="/certificates">
          <div className="self-center w-1/4">
            <button className="mt-10 mb-2 w-full text-white font-bold text-center hover:bg-slate-100 hover:text-slate-800 transition-all py-2 px-2 rounded">
              Ver Certificados
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

export default Experience;
