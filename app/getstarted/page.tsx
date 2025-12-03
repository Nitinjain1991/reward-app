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
          <h1 className="font-inter font-bold text-xl md:text-2xl text-primary">
            Get more repeat customers
          </h1>
          <div className="space-y-5 md:space-y-9">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div key={index} className="flex items-center gap-3 md:gap-4">
                  <div className="bg-gray-100 w-10 md:w-14 h-10 md:h-14 aspect-square flex items-center justify-center rounded-full">
                    <Icon className="text-primary w-4 md:w-5" />
                  </div>

                  <p className="font-inter font-normal text-xs md:text-sm text-primary">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
          <Link href="/points" className="inline-block">
            <button className="bg-primary text-white p-2 px-4 inset-shadow-sm rounded-md hover:opacity-90 transition cursor-pointer">
              <span className="font-inter font-semibold text-sm md:text-base capitalize">
                get started
              </span>
            </button>
          </Link>

          <p className="font-inter font-normal text-xs text-primary">
            By proceeding, you agree to the
            <a
              href="#"
              className="underline text-link hover:text-link/60 duration-300 mx-1"
            >
              Terms of Service
            </a>
            and
            <a
              href="#"
              className="underline text-link hover:text-link/60 duration-300 mx-1"
            >
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
            className="w-full max-w-4/5"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default page;
