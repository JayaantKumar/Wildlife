import { useEffect } from "react";

export default function useParallax() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-speed]");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      elements.forEach((el) => {
        const speed = el.getAttribute("data-speed");
        const y = scrollY * speed;

        el.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}