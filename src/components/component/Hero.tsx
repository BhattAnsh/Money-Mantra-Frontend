"use client";
import Link from "next/link";
import DotPattern from "@/components/ui/DotPattern";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <>
      <main className="flex-1 relative z-10">
        <section className="h-[100vh] py-20 text-primary-foreground flex flex-col justify-center">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h1 className="text-4xl text-secondary font-bold tracking-tight sm:text-7xl">
                  Trusted Financial Advice
                </h1>
                <p className="mt-4 text-lg">
                  Our team of experienced financial advisors is dedicated to
                  helping you achieve your financial goals.
                </p>
                <div className="mt-6">
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-background shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/HeroImage.svg"
                  width="800"
                  height="800"
                  alt="Hero Image"
                  className="mx-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <br />
      </main>
      <div
        className={cn(
          "[mask-image:linear-gradient(to_bottom,white,white, white)]"
        )}
      >
        <DotPattern
          width={40}
          height={40}
          cx={10}
          cy={10}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent)]"
          )}
        />
      </div>
    </>
  );
}
