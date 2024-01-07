import { useState, useEffect } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = 100; // Adjust this value based on when you want the navbar to become sticky

      setIsSticky(offset > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isSticky ? "sticky-navbar" : "";

  const isMobile = window.innerWidth < 900;

  return (
    <>
      {isMobile ? (
        <>
          <header
            className={`relative flex h-[8rem] items-center justify-between bg-gray-200 px-[4.8rem] ${navbarClass}`}
          >
            <a href="#">
              <h1 className="text-5xl">Logo</h1>
            </a>

            <nav className="main-nav">
              <Sheet>
                <SheetTrigger>
                  <p className="text-5xl">E</p>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader className="mt-[8rem]">
                    <SheetDescription className="m-4  inline-block cursor-pointer  font-custom text-4xl font-medium no-underline duration-100  active:underline ">
                      <nav className="main-nav">
                        <ul className="flex list-none flex-col items-center gap-[3.2rem]">
                          <li>
                            <a
                              href="your-link-for-How-it-works"
                              className="inline-block cursor-pointer font-custom   font-medium no-underline duration-100  active:underline"
                            >
                              How it works
                            </a>
                          </li>
                          <li>
                            <a
                              href="your-link-for-Testimonials"
                              className="inline-block cursor-pointer font-custom    font-medium no-underline duration-100  active:underline"
                            >
                              Testimonials
                            </a>
                          </li>
                          <li>
                            <a
                              href="your-link-for-Pricing"
                              className="inline-block cursor-pointer font-custom    font-medium no-underline duration-100  active:underline"
                            >
                              Pricing
                            </a>
                          </li>
                          <li>
                            <a
                              href="your-link-for-Meals"
                              className="inline-block cursor-pointer font-custom    font-medium no-underline duration-100  active:underline"
                            >
                              Aboutwh
                            </a>
                          </li>
                          <li>
                            <a
                              href="your-link-for-Sign-in"
                              className="inline-block cursor-pointer  rounded-[9px]  bg-primary px-[3.2rem] py-[1rem] font-custom text-3xl font-bold no-underline duration-100  hover:bg-primary/90 hover:text-secondary"
                            >
                              Sign in
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </nav>
          </header>
        </>
      ) : (
        <>
          <header
            className={`relative flex h-[9.6rem] items-center justify-between bg-gray-200 px-[4.8rem] ${navbarClass}`}
          >
            <a href="#">
              <h1 className="text-5xl">Logo</h1>
            </a>

            <nav className="main-nav">
              <ul className="flex list-none items-center gap-[4.8rem]">
                <li>
                  <a
                    href="your-link-for-How-it-works"
                    className="inline-block cursor-pointer font-custom  text-3xl font-medium no-underline duration-100 hover:text-primary active:underline"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="your-link-for-Testimonials"
                    className="inline-block cursor-pointer font-custom   text-3xl font-medium no-underline duration-100 hover:text-primary active:underline"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="your-link-for-Pricing"
                    className="inline-block cursor-pointer font-custom   text-3xl font-medium no-underline duration-100 hover:text-primary active:underline"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="your-link-for-Meals"
                    className="inline-block cursor-pointer font-custom   text-3xl font-medium no-underline duration-100 hover:text-primary active:underline"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="your-link-for-Sign-in"
                    className="inline-block cursor-pointer  rounded-[9px]  bg-primary px-[2.4rem] py-[1.2rem] font-custom text-3xl font-bold no-underline duration-100  hover:bg-primary/90 hover:text-secondary"
                  >
                    Sign in
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </>
      )}
    </>
  );
};

export default Navbar;
