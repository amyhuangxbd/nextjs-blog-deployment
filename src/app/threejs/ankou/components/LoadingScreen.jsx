import { useProgress } from "@react-three/drei";
import { Button } from "@mantine/core"
import { Html } from "@react-three/drei"

export const LoadingScreen = ({ started, onStarted }) => {
  const { progress } = useProgress();
  return (
    <Html>
    <div className={`bg-gradient-to-r from-cyan-500 to-blue-500 transition-opacity duration-8000 loadingScreen ${started ? "loadingScreen--started opacity-0" : " "}`}>
      <div className="loadingScreen__progress">
        <div
          className="loadingScreen__progress__value"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <div className="loadingScreen__board p-11 bg-lime-700 rounded-3xl text-center border-dashed transition-opacity delay-500">
        <h1 className="loadingScreen__title font-bold text-lg block">Please help me!</h1>
        <Button
          className=" grid loadingScreen__button p-2 pt-8 pb-8 bg-amber-300 hover:bg-amber-600 transition-all cursor-pointer"
          disabled={progress < 100}
          onClick={onStarted}
        >
          Start
        </Button>
      </div>
    </div>
    </Html>
  );
};
