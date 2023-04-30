import {
  AnimatePresence,
  stagger,
  useAnimate,
  usePresence,
} from "framer-motion";
import { useEffect } from "react";
type Props = {};

const Services = (props: Props) => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate("h1", {
          opacity: [0, 1],
          transform: ["translateY(100px)", "translateY(0px)"],
        });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate("h1", {
          opacity: [1, 0],
          transform: ["translateY(0px)", "translateY(-100px)"],
        });
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent]);

  return (
    <div
      className="h-screen flex items-center justify-center bg-slate-200"
      ref={scope}
    >
      <h1 className="text-3xl">Services</h1>
    </div>
  );
};

export default Services;
