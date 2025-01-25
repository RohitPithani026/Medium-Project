import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface RevealButtonsProps {
    children: ReactNode;
}

export const RevealButtons: React.FC<RevealButtonsProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div
            className="flex justify-center w-full h-full items-center"
            ref={ref}
            style={{ position: "relative", overflow: "hidden" }}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
};
