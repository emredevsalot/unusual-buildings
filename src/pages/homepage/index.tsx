import { useAnimate, usePresence } from "framer-motion";
import { useEffect } from "react";

const Homepage = () => {
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
      console.log("enterAnimation");
    } else {
      const exitAnimation = async () => {
        await animate("h1", {
          opacity: [1, 0],
          transform: ["translateY(0px)", "translateY(-100px)"],
        });
        safeToRemove();
        console.log("safeToRemove");
      };
      exitAnimation();
      console.log("exitAnimation");
    }
  }, [isPresent]);

  return (
    <div
      className="h-screen flex items-center justify-center bg-slate-200"
      ref={scope}
    >
      <h1 className="text-3xl">Hello world</h1>
    </div>
  );
};

export default Homepage;
