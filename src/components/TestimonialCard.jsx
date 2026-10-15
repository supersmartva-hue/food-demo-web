import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// Customer quote with a rating. The avatar is initials, so no personal photos are needed.
export function TestimonialCard({ testimonial }) {
  return (
    <View className="w-full gap-5 rounded-2xl border border-line bg-ivory p-6">
      <View className="flex-row gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Ionicons key={index} name="star" size={14} color="#B58B58" />
        ))}
      </View>

      <Text className="text-sm leading-relaxed text-ink">"{testimonial.quote}"</Text>

      <View className="flex-row items-center gap-3">
        <View className="h-10 w-10 items-center justify-center rounded-full bg-sage">
          <Text className="text-xs font-semibold text-forest">{testimonial.initials}</Text>
        </View>
        <View>
          <Text className="text-sm font-semibold text-forest">{testimonial.name}</Text>
          <Text className="text-xs text-muted">{testimonial.location}</Text>
        </View>
      </View>
    </View>
  );
}
