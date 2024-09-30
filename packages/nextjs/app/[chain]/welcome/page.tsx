"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { InputBase } from "~~/components/scaffold-eth";

const chainObjs = {
  base: {
    titleCard: "How Based Are You?",
    ctaCard: "Find out how Based you are!",
  },
  arbitrum: {
    titleCard: "How Futuristic Are You?",
    ctaCard: "Find out how Futuristic you are!",
  },
};

export default function WelcomePage({ params }: { params: { chain: string } }) {
  const router = useRouter();

  const chainObj = chainObjs[params.chain as keyof typeof chainObjs];

  const [nameValue, setNameValue] = useState<string>("");

  return (
    <div className="flex flex-col justify-center items-center space-y-32">
      <p className="text-4xl md:text-8xl text-center">{chainObj.titleCard}</p>
      <div className="w-[300px] md:w-[800px] flex justify-center flex-col text-center">
        <p className="text-xl md:text-4xl">Enter an address</p>
        <InputBase
          value={nameValue}
          onChange={updatedValue => {
            setNameValue(updatedValue);
          }}
          placeholder="0x"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xl md:text-4xl text-center">{chainObj.ctaCard}</p>
        <button
          onClick={() => {
            router.push(`/base/${nameValue}`);
          }}
          className="btn btn-primary btn-lg text-4xl"
        >
          Go!
        </button>
      </div>
    </div>
  );
}
