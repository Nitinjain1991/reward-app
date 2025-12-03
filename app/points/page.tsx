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
  const [selected, setSelected] = useState(1);

  const planData = [
    {
      title: "Great for Beginners",
      desc: "If a customer spends $100, they are rewarded with 500 points, which can be redeemed for a $3 discount.",
      arrow: "before:left-1/6",
    },
    {
      title: "Recommended for most businesses",
      desc: "If a customer spends $100, they are rewarded with 500 points, which can be redeemed for a $5 discount.",
      arrow: "before:left-1/2",
    },
    {
      title: "Great for Scaling Businesses",
      desc: "If a customer spends $100, they are rewarded with 500 points, which can be redeemed for a $10 discount.",
      arrow: "before:left-5/6",
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-5 lg:max-w-4/6 mx-auto">
        <h1 className="font-inter font-bold text-xl md:text-2xl text-primary">
          Reward every order with points
        </h1>
        <p className="font-inter font-normal text-xs md:text-sm text-primary">
          Every time a customer makes a purchase they will be rewarded with
          points that can be used as a discount on their next order.
        </p>

        <div className="my-4 md:my-10 space-y-4">
          <div className="flex gap-4 overflow-auto">
            {points.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`min-w-48
                  p-5 border hover:border-link duration-300 rounded-lg text-center space-y-1 cursor-pointer group/highlight relative
                  ${
                    selected === index
                      ? "border-link shadow-md bg-white"
                      : "border-gray-300"
                  }
                `}
              >
                <h2
                  className={`
                    font-semibold text-xl md:text-2xl duration-300
                    ${selected === index ? "text-link" : "text-primary"}
                  `}
                >
                  {item.point}%
                </h2>
                <p className="font-inter font-normal text-xs md:text-sm text-primary">
                  {item.description}
                </p>

                {selected === index && (
                  <div className="bg-link rounded-full w-max aspect-square p-1 absolute top-0 right-0 -translate-x-3 translate-y-3">
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
          <div
            className={`bg-gray-100 p-4 space-y-1 relative before:w-4 before:h-4 before:bg-gray-100 before:rotate-45 before:absolute before:-top-2 
              ${planData[selected].arrow}`}>
            <h3 className="font-inter font-semibold text-xs md:text-sm text-primary">
              {planData[selected].title}
            </h3>

            <p className="font-inter font-normal text-xs md:text-sm text-primary">
              {planData[selected].desc}
            </p>
          </div>
        </div>

        <Link href="/" className="inline-block">
          <button className="bg-primary text-white p-2 px-4 inset-shadow-sm rounded-md hover:opacity-90 transition cursor-pointer">
            <span className="font-inter font-semibold text-sm md:text-base capitalize">
              next
            </span>
          </button>
        </Link>

        <div className="flex items-center gap-1.5">
          <UserRoundPen className="text-black w-5" />
          <p className="font-inter font-normal text-xs md:text-sm text-primary">
            You can change this later.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Points;
