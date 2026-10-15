import { useEffect, useRef, useState } from 'react';
import { Animated, Platform } from 'react-native';

// Fades and lifts its children in once they scroll into view. Native platforms and
// users with "reduce motion" turned on see the content immediately, with no animation.
function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

export function Reveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  const isWeb = Platform.OS === 'web';
  const reduced = isWeb && prefersReducedMotion();
  const [visible, setVisible] = useState(!isWeb || reduced);
  const progress = useRef(new Animated.Value(visible ? 1 : 0)).current;

  useEffect(() => {
    if (visible) return undefined;
    if (typeof IntersectionObserver === 'undefined' || !ref.current) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    Animated.timing(progress, {
      toValue: 1,
      duration: reduced ? 0 : 650,
      delay: reduced ? 0 : delay,
      useNativeDriver: false,
    }).start();
  }, [visible, delay, progress, reduced]);

  return (
    <Animated.View
      ref={ref}
      style={[
        style,
        {
          opacity: progress,
          transform: [
            {
              translateY: progress.interpolate({ inputRange: [0, 1], outputRange: [24, 0] }),
            },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}
