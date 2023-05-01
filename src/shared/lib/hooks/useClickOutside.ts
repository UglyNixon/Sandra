import { useEffect, RefObject } from 'react';

const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void, id:string) => {
    console.log(ref.current)
    const handleClick = (e: MouseEvent) => {
        console.log(e.target)
        if (ref.current != document.getElementById(id)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        console.log('повешен обработчик');
        return () => {
            document.removeEventListener('mousedown', handleClick);
            console.log('убран обработчик');
        };
    }, []);
};

export default useClickOutside;
