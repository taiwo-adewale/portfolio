"use client";

import { useEffect, useState, useRef, RefObject } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";

import { cn } from "@/lib/utils";
import {
  trapKeyboardFocus,
  handleEscapeKeyClose,
} from "@/helpers/keyboardActions";

type ModalProps = {
  onModalClose: () => void;
  children: React.ReactNode;
  className?: string;
  bodyClassName: string;
  ariaLabel: string;
  triggerRef: RefObject<HTMLElement>;
};

interface ContainerProps extends ModalProps {
  isOpen: boolean;
}

export default function ModalContainer({ isOpen, ...rest }: ContainerProps) {
  return isOpen ? <Modal {...rest} /> : null;
}

const Modal = ({
  bodyClassName,
  onModalClose,
  children,
  className,
  ariaLabel,
  triggerRef,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [focusableElements, setFocusableElements] = useState<HTMLElement[]>([]);

  const handleClose = () => {
    setIsVisible(false);

    setTimeout(onModalClose, 500);
  };

  const handleKeyboardActions = (e: KeyboardEvent) => {
    handleEscapeKeyClose(e, handleClose);
    trapKeyboardFocus(e, focusableElements);
  };

  useEffect(() => {
    if (modalRef.current) {
      const focusableElementsList = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;

      setFocusableElements(Array.from(focusableElementsList));
    }

    setIsVisible(true);
    document.body.classList.add(bodyClassName);

    return () => {
      document.body.classList.remove(bodyClassName);
      triggerRef.current && triggerRef.current.focus();
    };
  }, []);

  useEffect(() => {
    if (focusableElements.length > 0) {
      focusableElements[0].focus();

      document.addEventListener("keydown", handleKeyboardActions);
    }

    return () => document.removeEventListener("keydown", handleKeyboardActions);
  }, [focusableElements.length]);

  return createPortal(
    <div
      role="dialog"
      aria-modal={true}
      aria-label={ariaLabel}
      ref={modalRef}
      onClick={handleClose}
      className={cn(
        "fixed inset-0 h-dvh z-30 py-14 overflow-y-auto grid place-items-center bg-black/80 backdrop-blur-sm transition-all duration-300",
        isVisible
          ? "opacity-100 pointer-events-auto delay-0"
          : "opacity-0 pointer-events-none delay-200",
        className
      )}
    >
      <div
        className={cn(
          "relative bg-modal w-4/5 py-5 px-1.5 rounded-large border border-border z-40 duration-300 origin-center",
          isVisible
            ? "opacity-100 pointer-events-auto scale-100 delay-200"
            : "opacity-0 pointer-events-none scale-0 delay-0"
        )}
      >
        {children}

        <button
          aria-label="close navigation menu"
          className="absolute right-0 p-2 mb-2 duration-300 border bottom-full bg-modal border-border rounded-small hover:border-primary hover:bg-card-secondary focus:bg-card-secondary"
        >
          <MdOutlineClose className="text-2xl" />
        </button>
      </div>
    </div>,
    document.body
  );
};
