import LottieView from "lottie-react-native";
import { useRef } from "react";
import AnimatedSplashScreen from "@/src/components/day-4/AnimatedSplashScreen";

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);

  return <AnimatedSplashScreen />;
};

export default AnimationScreen;
