import { Text, View } from 'react-native';

// Small uppercase eyebrow above a serif section title.
// tone="light" is for dark (forest) section backgrounds; the default is for light backgrounds.
export function SectionHeading({ eyebrow, title, tone = 'dark', className = '' }) {
  const isLight = tone === 'light';

  return (
    <View className={`gap-2 ${className}`}>
      <Text className={`text-xs font-semibold uppercase tracking-[2px] ${isLight ? 'text-gold' : 'text-olive'}`}>
        {eyebrow}
      </Text>
      <Text className={`font-heading text-3xl leading-tight lg:text-4xl ${isLight ? 'text-ivory' : 'text-forest'}`}>
        {title}
      </Text>
    </View>
  );
}
