import { RefObject, useEffect } from "react"

interface Props {
    ref: RefObject<HTMLElement>
    handler: () => void
}
const useOutsideClick = ({ref, handler}: Props) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          handler();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, handler]);

};

export default useOutsideClick;