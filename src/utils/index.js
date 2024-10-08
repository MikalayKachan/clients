import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler()
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

    }, [ref, handler])
}