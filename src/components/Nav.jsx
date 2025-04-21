"use client";

import Image from "next/image";
import { navLinks } from "@/constants";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const Nav = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <div className="py-1">
          <a href="/">
            <Image
              src="/assets/images/header-logo.svg"
              alt="Logo"
              width={129}
              height={29}
              className="m-0 h-[29px] w-[129px]"
            />
          </a>
        </div>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="font-montserrat text-lg leading-normal text-gray-600 hover:text-gray-400"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 font-montserrat text-lg font-medium leading-normal hover:text-gray-400 max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <button
            className="rounded-full px-2 py-2 hover:bg-gray-200"
            onClick={() => setIsOpen(true)}
          >
            <Image src="/assets/icons/hamburger.svg" width={20} height={20} />
          </button>
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <DialogBackdrop className="fixed inset-0 bg-black/30" />

            {/* Full-screen container to center the panel */}
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              {/* The actual dialog panel  */}
              <DialogPanel
                transition
                className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg ring-1 ring-black ring-opacity-5 duration-200 ease-out focus:outline-none data-[closed]:translate-x-80 data-[closed]:opacity-0"
              >
                <div className="flex w-full justify-end py-4">
                  <button onClick={() => setIsOpen(false)} className="px-4">
                    <XMarkIcon className="h-8 w-8 rounded-full text-gray-500 hover:bg-gray-200" />
                  </button>
                </div>
                {navLinks.map((item) => (
                  <div key={item.id} className="py-1 pr-5">
                    <a
                      href={item.href}
                      className="inline-flex w-full items-center justify-between py-3 pl-10 font-montserrat text-2xl font-medium text-gray-950 hover:text-gray-500 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      {item.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </a>
                  </div>
                ))}
              </DialogPanel>
            </div>
          </Dialog>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
