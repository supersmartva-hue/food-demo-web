import { Pressable, Text } from 'react-native';

// Three styles:
//   primary: forest fill with ivory text, for the main call to action on light backgrounds.
//   outline: forest border, for secondary actions on light backgrounds.
//   light:   ivory fill with forest text, for calls to action on dark or muted-green backgrounds.
// Hover darkens or tints the fill with a short transition. Focus shows a gold ring. Press dims the button.
const VARIANTS = {
  primary: {
    container: 'bg-forest',
    text: 'text-ivory',
    hover: { backgroundColor: '#2E4F3D' },
  },
  outline: {
    container: 'border border-forest bg-transparent',
    text: 'text-forest',
    hover: { backgroundColor: '#E3E7DC' },
  },
  light: {
    container: 'bg-ivory',
    text: 'text-forest',
    hover: { backgroundColor: '#FFFFFF' },
  },
};

// Set withArrow to add the trailing arrow used on the reference's main calls to action.
export function Button({ label, variant = 'primary', withArrow = false, onPress, accessibilityLabel, className = '' }) {
  const style = VARIANTS[variant] ?? VARIANTS.primary;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      style={({ hovered, focused }) => [
        { transitionProperty: 'background-color', transitionDuration: '200ms' },
        hovered && style.hover,
        focused && { boxShadow: '0 0 0 3px rgba(181, 139, 88, 0.6)' },
      ]}
      className={`flex-row items-center justify-center gap-2 rounded-full px-6 py-3 active:opacity-80 ${style.container} ${className}`}
    >
      <Text className={`text-sm font-semibold ${style.text}`}>{withArrow ? `${label} →` : label}</Text>
    </Pressable>
  );
}
