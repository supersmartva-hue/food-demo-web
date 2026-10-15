import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { STATS } from '../data/content';

// Four figures in one row on desktop, separated by thin dividers. A 2x2 grid on smaller screens.
export function StatsSection() {
  return (
    <View className="w-full border-y border-forest/20 bg-sage">
      <View className="w-full max-w-[1200px] flex-row flex-wrap self-center px-5 py-8 md:px-8 lg:px-12 lg:py-10">
        {STATS.map((stat, index) => (
          <View
            key={stat.id}
            className={`w-1/2 flex-row items-center gap-4 px-3 py-4 lg:w-auto lg:flex-1 lg:justify-center ${
              index > 0 ? 'lg:border-l lg:border-forest/20' : ''
            }`}
          >
            <View className="h-11 w-11 items-center justify-center rounded-full bg-white">
              <Ionicons name={stat.icon} size={20} color="#6B7452" />
            </View>
            <View>
              <Text className="font-heading text-2xl text-forest lg:text-3xl">{stat.value}</Text>
              <Text className="text-xs text-forest">{stat.label}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
