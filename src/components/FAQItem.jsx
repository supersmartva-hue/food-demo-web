import { Pressable, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// One accordion row. The question is a button that shows or hides the answer.
export function FAQItem({ item, open, onToggle }) {
  return (
    <View className="overflow-hidden rounded-xl border border-line bg-white">
      <Pressable
        onPress={onToggle}
        accessibilityRole="button"
        accessibilityLabel={item.question}
        accessibilityState={{ expanded: open }}
        className="flex-row items-center justify-between gap-4 px-5 py-4 active:opacity-70"
      >
        <Text className="flex-1 text-sm font-semibold text-forest">{item.question}</Text>
        <Ionicons name={open ? 'remove' : 'add'} size={18} color="#1F3B2C" />
      </Pressable>

      {open && (
        <View className="border-t border-line px-5 pb-4 pt-3">
          <Text className="text-sm leading-relaxed text-muted">{item.answer}</Text>
        </View>
      )}
    </View>
  );
}
