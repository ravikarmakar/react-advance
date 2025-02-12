import {
  motion,
  useMotionValue,
  // useSpring
} from "framer-motion";

const RangeSlider = () => {
  // const scale = useSpring(1);
  const scale = useMotionValue(1);

  const handleRangeChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(e.target.value));
  };

  return (
    <div>
      <motion.button
        className="h-40 w-40 bg-yellow-200 rounded-full"
        style={{ scale }}
      />

      <div className="mt-[6rem]">
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={handleRangeChnage}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
