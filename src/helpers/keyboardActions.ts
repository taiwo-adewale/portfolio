import { keyboardNavKeys } from "@/constants/keyboardNavKeys";

export const trapKeyboardFocus = (
  e: KeyboardEvent,
  focusableElements: HTMLElement[] | null
) => {
  const { key } = e;

  if (keyboardNavKeys.includes(key)) {
    e.preventDefault();

    if (!focusableElements || focusableElements.length < 1) return;

    // get currently focused element
    let focusedItem = document.activeElement as HTMLElement;

    // if the currently focused item is not a part of the focusable elements list, focus the first item in that list
    if (!focusableElements.includes(focusedItem)) {
      focusedItem = focusableElements[0];
      focusedItem.focus();
    }

    let index = focusableElements.indexOf(focusedItem);

    const prevAction =
      key === "ArrowLeft" || key === "ArrowUp" || (e.shiftKey && key === "Tab");

    const nextAction =
      key === "ArrowRight" || key === "ArrowDown" || key === "Tab";

    if (prevAction) {
      index = index === 0 ? focusableElements.length - 1 : index - 1;
    } else if (nextAction) {
      index = index === focusableElements.length - 1 ? 0 : index + 1;
    }

    focusableElements[index].focus();
  }
};

export const handleEscapeKeyClose = (e: KeyboardEvent, closeFn: () => void) => {
  if (e.key === "Escape") {
    e.preventDefault();
    closeFn();
  }
};
