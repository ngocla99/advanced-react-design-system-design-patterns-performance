import { useMousePosition } from "../../hooks/useMousePosition";

export const TrackMouse = (props) => {
  const position = useMousePosition();

  return (
    <div>
      Last mouse position - x: {position.x}, y: {position.y}
    </div>
  );
};
