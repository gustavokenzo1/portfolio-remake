import Link from "next/link";

interface ButtonProps {
  scrollCount: number;
  url: string;
  text: string;
}

export const Button = ({ scrollCount, url, text }: ButtonProps) => {
  return (
    <Link href={url}>
      <div
        style={{
          opacity: scrollCount > 40 ? scrollCount / 50 : 0,
        }}
      >
        <button className="mt-4 mb-2 w-full max-w-md text-white font-bold text-start hover:bg-slate-100 hover:text-slate-800 transition-all py-2 px-2 rounded">
          {text}
        </button>
        <div className="flex-grow h-[2px] bg-slate-100 mb-2" />
      </div>
    </Link>
  );
};
