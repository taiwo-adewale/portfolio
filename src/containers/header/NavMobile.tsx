"use client";

import { useState, useRef } from "react";

import Modal from "@/components/Modal";
import NavContent from "./NavContent";
import useGetWindowWidth from "@/hooks/useGetWindowWidth";

export default function NavMobile() {
  const windowWidth = useGetWindowWidth();
  const navTriggerRef = useRef<HTMLButtonElement>(null);
  const [navActive, setNavActive] = useState(false);

  const openNavMenu = () => {
    setNavActive(true);
  };

  const closeNavMenu = () => {
    setNavActive(false);
  };

  return (
    <div className="lg:hidden">
      <button
        ref={navTriggerRef}
        onClick={openNavMenu}
        aria-label="open navigation menu"
        className="flex flex-col items-center justify-center duration-300 border border-transparent rounded-full size-14 gap-y-1 lg:hidden hover:bg-card-secondary hover:border-border focus:bg-card-secondary focus:border-border"
      >
        <span className="w-6 h-[0.1875rem] rounded-full bg-foreground"></span>
        <span className="w-6 h-[0.1875rem] rounded-full bg-foreground"></span>
        <span className="w-6 h-[0.1875rem] rounded-full bg-foreground"></span>
      </button>

      {windowWidth && windowWidth < 1024 && (
        <Modal
          isOpen={navActive}
          onModalClose={closeNavMenu}
          bodyClassName="overflow-y-hidden"
          ariaLabel="navigation menu"
          triggerRef={navTriggerRef}
        >
          <nav>
            <NavContent closeNavMenu={closeNavMenu} />
          </nav>
        </Modal>
      )}
    </div>
  );
}
