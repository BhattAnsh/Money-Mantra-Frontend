"use client"
import React from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type Props = {};

function Navbar({}: Props) {
  return (
    <header className="bg-primary shadow">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link
          href="#"
          className="text-lg font-bold text-background"
          prefetch={false}
        >
          Money Mantra
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors text-background hover:text-[black]"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors text-background hover:text-[black]"
            prefetch={false}
          >
            About Us
          </Link>
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors text-background hover:text-[black]"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors text-background hover:text-[black]"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
                prefetch={false}
              >
                About Us
              </Link>
              <Link
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
                prefetch={false}
              >
                Services
              </Link>
              <Link
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
                prefetch={false}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
function XIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    );
  }
  function MenuIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    );
  }
export default Navbar;
