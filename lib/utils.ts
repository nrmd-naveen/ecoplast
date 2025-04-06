import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export  const scrollToSection = (sectionRef: React.RefObject<HTMLInputElement> ): void => {
    window.scrollTo({
        //@ts-ignore
      top: sectionRef.current.offsetTop - 120,
      behavior: 'smooth',
    });
};
  

