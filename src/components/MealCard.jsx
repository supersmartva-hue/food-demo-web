import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

// Service card: photo, title, short description, and an arrow button.
// The photo has a fixed height and full card width, so every card image is the same size.
// On hover the card lifts slightly with a deeper shadow; the transition is short and subtle.
export function MealCard({ title, description, image, className = '' }) {
  return (
    <Pressable
      accessibilityRole="none"
      style={({ hovered }) => [
        styles.card,
        hovered && styles.cardHover,
      ]}
      className={`overflow-hidden rounded-2xl bg-white shadow-sm ${className}`}
    >
      <Image source={image} accessibilityLabel={title} resizeMode="cover" style={styles.photo} />

      <View className="gap-2 p-4">
        <Text className="font-heading text-base text-forest">{title}</Text>
        <Text className="text-xs leading-relaxed text-muted">{description}</Text>

        <View className="mt-2 flex-row justify-end">
          <View
            accessibilityLabel={`Learn more about ${title}`}
            className="h-7 w-7 items-center justify-center rounded-full bg-sage"
          >
            <Text className="text-xs text-forest">→</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  photo: {
    width: '100%',
    height: 176,
  },
  card: {
    transitionProperty: 'transform, box-shadow',
    transitionDuration: '250ms',
  },
  cardHover: {
    transform: [{ translateY: -4 }],
    boxShadow: '0 14px 28px rgba(31, 59, 44, 0.14)',
  },
});
