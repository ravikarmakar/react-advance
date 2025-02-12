# React Advanced Learning Journey 🚀  

I have started learning **advanced React** and exploring **Framer Motion** for animations and UI enhancements.  

## 📌 First Step: Learning Framer Motion  
- **Framer Motion** is a powerful animation library that provides smooth animations for React components.  
- My first step was understanding how to animate elements and create interactive UI components.  

### 🔥 Next Steps  
✅ Exploring advanced animations  
✅ Learning page transitions and gesture animations  
✅ Implementing animations in real-world projects  


<!-- Just Animation Things -->

# Framer Motion - Animation Properties

Framer Motion is a powerful animation library for React that allows for complex animations with minimal effort.

## **Motion Component Props**

| Property               | Description |
|------------------------|-------------|
| `initial`             | Defines the starting animation state. |
| `animate`             | Defines the target animation state. |
| `exit`                | Defines the animation when the component unmounts. |
| `variants`            | Used to define reusable animation states. |
| `transition`          | Controls the timing and easing of animations. |
| `whileHover`          | Animation applied when hovering over an element. |
| `whileTap`            | Animation applied when tapping (clicking). |
| `whileDrag`           | Animation applied while dragging. |
| `drag`                | Enables drag behavior (`true`, `"x"`, or `"y"`). |
| `dragConstraints`     | Limits the draggable area. |
| `dragElastic`         | Controls how much the element "stretches" when dragged. |
| `dragSnapToOrigin`    | Snaps back to the starting position when released. |
| `layout`              | Enables smooth layout animations. |
| `layoutId`            | Enables shared element transitions. |
| `style`               | Allows inline styles for motion components. |

---

## **Transition Properties**

| Property     | Description |
|-------------|-------------|
| `duration`  | Animation duration (in seconds). |
| `delay`     | Delay before animation starts. |
| `ease`      | Controls easing (`easeIn`, `easeOut`, `linear`, etc.). |
| `repeat`    | Number of times animation repeats. |
| `repeatType` | Controls repeating behavior (`loop`, `mirror`, `reverse`). |
| `staggerChildren` | Delays children animations when using `variants`. |

---

## **Hooks in Framer Motion**

| Hook | Description |
|------|-------------|
| `useAnimation` | Controls animation programmatically. |
| `useCycle` | Cycles through multiple animation states. |
| `useScroll` | Tracks scroll progress. |
| `useTransform` | Maps input values to output values for animation. |
| `useSpring` | Creates smooth spring animations. |
| `useMotionValue` | Tracks animated values outside of React state. |

---

## **Example Usage**
```Tsx
import { motion } from "framer-motion";

const Example = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      Hover me!
    </motion.div>
  );
};

export default Example;


