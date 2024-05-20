import { useProgress } from "@react-three/drei";
import { Button } from "@mantine/core"
import { Html } from "@react-three/drei"

export const LoadingScreen = ({ started, onStarted }) => {
  const { progress } = useProgress();
  return (
    <Html>
    <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
      <div className="loadingScreen__progress">
        <div
          className="loadingScreen__progress__value"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <div className="loadingScreen__board">
        <h1 className="loadingScreen__title">Please help me!</h1>
        <Button
          className="loadingScreen__button"
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
