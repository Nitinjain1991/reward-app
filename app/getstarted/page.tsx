import MainLayout from "@/components/MainLayout";
import { Rocket, Gift, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";

const page = () => {
  const benefits = [
    {
      icon: Gift,
      description: "Turn every order into an opportunity for connection.",
    },
    {
      icon: Heart,
      description:
        "Reward customers with points they can redeem for savings and special experiences.",
    },
    {
      icon: Rocket,
      description:
        "Watch your best customers become loyal advocates as they climb tiers and achieve VIP status.",
    },
  ];

  return (
    <MainLayout>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-7">
          <h1 className="font-inter font-bold text-2xl text-[#2a2a2a]">
            Get Started with Our Gifting App
          </h1>

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-gray-100 w-14 h-14 aspect-square flex items-center justify-center rounded-full">
                  <Icon size={20} className="text-[#2a2a2a]" />
                </div>

                <p className="font-inter font-normal text-sm text-[#2a2a2a]">
                  {benefit.description}
                </p>
              </div>
            );
          })}

          <Link href="/points" className="inline-block">
            <button className="bg-[#2a2a2a] text-white p-2 px-4 inset-shadow-sm rounded-md hover:opacity-90 transition cursor-pointer">
              <span className="font-inter font-semibold text-base capitalize">
                get started
              </span>
            </button>
          </Link>

          <p className="font-inter font-normal text-xs text-[#2a2a2a]">
            By proceeding, you agree to the
            <a href="#" className="underline text-[#4739f9]">
              Terms of Service
            </a>
            and
            <a href="#" className="underline text-[#4739f9]">
              Privacy Policy
            </a>
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/cart-image.png"
            alt="Get Started Illustration"
            width={500}
            height={500}
            className="max-w-4/5"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default page;
