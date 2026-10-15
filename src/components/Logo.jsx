import { StyleSheet, Text, View } from 'react-native';

// Simple mark: a deep green bowl with a fresh olive leaf above it.
// Built from plain View shapes, so it renders reliably on web and native without an image asset.
// The size prop scales the mark and the wordmark together.
export function Logo({ size = 'md', tone = 'dark' }) {
  const isSmall = size === 'sm';
  const u = isSmall ? 0.72 : 1;
  const textColor = tone === 'light' ? 'text-ivory' : 'text-forest';

  return (
    <View className="flex-row items-center gap-2">
      <View style={{ width: 36 * u, height: 36 * u }}>
        <View
          style={[
            styles.bowl,
            { left: 4 * u, bottom: 6 * u, width: 28 * u, height: 14 * u, borderBottomLeftRadius: 14 * u, borderBottomRightRadius: 14 * u },
          ]}
        />
        <View
          style={[
            styles.leaf,
            { right: 6 * u, top: 2 * u, width: 12 * u, height: 18 * u, borderTopLeftRadius: 12 * u, borderBottomRightRadius: 12 * u },
          ]}
        />
      </View>
      <Text
        accessibilityRole="header"
        className={`font-heading font-bold ${isSmall ? 'text-sm tracking-[2.5px]' : 'text-lg tracking-[3px]'} ${textColor}`}
      >
        HEALTHIFY
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bowl: {
    position: 'absolute',
    backgroundColor: '#1F3B2C',
  },
  leaf: {
    position: 'absolute',
    backgroundColor: '#A8B29A',
    transform: [{ rotate: '24deg' }],
  },
});
