/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import MainLayout from "@/components/MainLayout";
import { useState } from "react";
import { Check, UserRoundPen } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";
const Points = () => {
  const points: { point: number; description: string }[] = [
    {
      point: 3,
      description: "3% back in points on every order",
    },
    {
      point: 5,
      description: "5% back in points on every order",
    },
    {
      point: 10,
      description: "10% back in points on every order",
    },
  ];
  const [selected, setSelected] = useState<number | null>(1);
  return (
    <MainLayout>
      <div className="space-y-5 max-w-4/6 mx-auto">
        <h1 className="font- font-bold text-2xl text-[#2a2a2a]">
          Get Started with Our Gifting App
        </h1>
        <p className="font- font-normal text-sm text-[#2a2a2a]">
          Every time a customer makes a purchase they will be rewarded with
          points that can be used as a discount on their next order.
        </p>

        <div className="my-10 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {points.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`
                  p-5 border hover:border-[#4739f9] duration-300 rounded-lg text-center space-y-1 cursor-pointer group/highlight relative
                  ${
                    selected === index
                      ? "border-[#4739f9] shadow-md bg-white"
                      : "border-gray-300"
                  }
                `}
              >
                <h2
                  className={`
                    font-semibold text-2xl duration-300
                    ${selected === index ? "text-[#4739f9]" : "text-[#2a2a2a]"}
                  `}
                >
                  {item.point}%
                </h2>
                <p className="font- font-normal text-sm text-[#2a2a2a]">
                  {item.description}
                </p>

                {selected === index && (
                  <div className="bg-[#4739f9] rounded-full w-max aspect-square p-1 absolute top-0 right-0 -translate-x-3 translate-y-3">
                    <Check
                      strokeWidth={1.5}
                      absoluteStrokeWidth
                      size={10}
                      className="font-bold text-white"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-4 space-y-1 relative before:w-4 before:h-4 before:bg-gray-100 before:rotate-45 before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2">
            <h3 className="font- font-semibold text-sm text-[#2a2a2a]">
              Recommended for most businesses.
            </h3>
            <p className="font- font-normal text-sm text-[#2a2a2a]">
              If a customer spends $100, they are rewarded with 500 points,
              which can be redeemed for a $5 discount.
            </p>
          </div>
        </div>

        <Link href="/" className="inline-block">
          <button className="bg-[#2a2a2a] text-white p-2 px-4 inset-shadow-sm rounded-md hover:opacity-90 transition cursor-pointer">
            <span className="font- font-semibold text-base capitalize">
              next
            </span>
          </button>
        </Link>

        <div className="flex items-center gap-1.5">
          <UserRoundPen className="text-black w-5" />
          <p className="font- font-normal text-sm text-[#2a2a2a]">
            You can change this later.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Points;
