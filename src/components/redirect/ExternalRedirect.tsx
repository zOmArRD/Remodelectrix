import {useEffect} from "react";
import SpinnerLoader from "../loader/SpinnerLoader.tsx";

const ExternalRedirect = ({to}: { to: string }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = to;
        }, 1500);

        return () => clearTimeout(timer);
    }, [to]);

    return (
        <>
            <SpinnerLoader/>
        </>
    )
};

export default ExternalRedirect;
