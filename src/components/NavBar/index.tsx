"use client";

import { SwitchLanguage } from "../SwitchLanguage";
import Image from "next/image";
import { Menu, X as CloseIcon } from "lucide-react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link as LinkSwitch, usePathname, useRouter } from "@/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 right-0 left-0">
      <Popover className="container text-white flex items-center justify-between py-3 md:gap-3">
        <h1 className="font-medium m-0">
          <Link href="#">
            {/* <Image
            alt="logo NewConceptExhibition"
            src="/img/logo-new-concept-white.png"
            width={30}
            height={30}
          /> */}
            NewConceptExhibiton
          </Link>
        </h1>
        <div className="grow">
          <nav>
            {/* <div className="hover:text-[#47b2e4] duration-300"></div> */}
            <ul className="hidden md:flex items-center justify-center lg:gap-6 md:gap-2 sm:gap-2 uppercase m-0 p-0">
              <li className="navbarLi">
                <Link href="#home">Home</Link>
              </li>
              <li className="navbarLi">
                <Link href="#home">About</Link>
              </li>
              <li className="navbarLi">
                <Link href="#home">Services</Link>
              </li>
              <li className="navbarLi">
                <Link href="#home">Portfolio</Link>
              </li>
              <li className="navbarLi">
                <Link href="#home">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex grow items-center justify-end md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 border-none duration-300 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
            <span className="sr-only">Open Menu</span>
            <Menu className="h-6 w-6 text-white" aria-hidden="true" />
          </Popover.Button>
        </div>

        <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30" />
        <Transition
          as={Fragment}
          enter="duration-[400ms] ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden text-[#283A5A]"
          >
            <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
              <div className="px-3 pt-3 pb-4">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold">Menu</h1>
                  <div className="-mr-2">
                    <Popover.Button
                      className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none
                  focus:ring-2 focus:ring-inset focus:ring-indigo-500
                "
                    >
                      <span className="sr-only">Close Menu</span>
                      <CloseIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <LinkSwitch
                    href={pathname}
                    locale="en-US"
                    className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2
                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500
                "
                  >
                    English
                  </LinkSwitch>

                  <LinkSwitch
                    href={pathname}
                    locale="pt-BR"
                    className="rounded-md bg-gray-500 px-4 py-2 text-sm font-medium md:text-xl w-full
                "
                  >
                    Portuguese
                  </LinkSwitch>
                </div>

                <div className="mt-6">
                  <nav className="grid gap-y-5">
                    <Link
                      href="/"
                      className="focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      Home
                    </Link>
                    <Link
                      href="/"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      About
                    </Link>
                    <Link
                      href="/"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      Services
                    </Link>
                    <Link
                      href="/"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      Portfolio
                    </Link>
                    <Link
                      href="/"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      Contact
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>

        <div className="hidden md:block">
          <SwitchLanguage />
        </div>
      </Popover>
    </div>
    // <header
    //   id="header"
    //   className="w-full h-20 lg:h-28 lg:bg-transparent text-[#37517e] md:text-white fixed-top"
    // >
    //   <nav className="container flex justify-between items-center w-[92%] py-3">
    //     <h1 className="text-2xl uppercase font-bold">
    //       {/* <a href="">
    //         <Image alt="logo NewConceptExhibition" src="" />
    //       </a> */}
    //       NewConceptExhibition
    //     </h1>

    //     <div className="md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 md:bg-[#37517e] bg-slate-50 ">
    //       <ul className="flex md:hidden lg:inline-flex md:flex-row flex-col lg:items-center gap-6 md:gap-[4vw] uppercase text-sm font-semibold m-0">
    //         <li className="">
    //           <SwitchLanguage />
    //         </li>
    //         <li className="navbarLi">
    //           <Link href="#">Home</Link>
    //         </li>
    //         <li className="navbarLi">
    //           <Link href="#">About</Link>
    //         </li>
    //         <li className="navbarLi">
    //           <Link href="#">Services</Link>
    //         </li>
    //         <li className="navbarLi">
    //           <Link href="#">Portfolio</Link>
    //         </li>
    //         <li className="navbarLi">
    //           <Link href="#">Contact</Link>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="inline-flex lg:hidden">
    //       <Menu className="text-3xl cursor-pointer lg:hidden" />
    //     </div>
    //   </nav>

    //   {/* <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between"></div> */}
    // </header>
  );
}
