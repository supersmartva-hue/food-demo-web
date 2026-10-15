import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from './Button';

// One pricing plan. The popular plan is a forest card with ivory text and a gold badge,
// so it stands out from the ivory cards beside it.
export function PricingCard({ plan }) {
  const dark = Boolean(plan.popular);

  return (
    <View
      className={`relative w-full gap-5 rounded-2xl p-6 shadow-sm ${
        dark ? 'bg-forest' : 'border border-line bg-ivory'
      }`}
    >
      {dark && (
        <View className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1">
          <Text className="text-[10px] font-semibold uppercase tracking-[1px] text-forest">Most popular</Text>
        </View>
      )}

      <View className="flex-row items-center gap-3">
        <View className={`h-10 w-10 items-center justify-center rounded-full ${dark ? 'bg-forest-soft' : 'bg-sage'}`}>
          <Ionicons name={plan.icon} size={20} color={dark ? '#B58B58' : '#6B7452'} />
        </View>
        <Text className={`font-heading text-lg ${dark ? 'text-ivory' : 'text-forest'}`}>{plan.name}</Text>
      </View>

      <Text className={`text-xs leading-relaxed ${dark ? 'text-sage' : 'text-muted'}`}>{plan.description}</Text>

      <Text className={`font-heading text-2xl ${dark ? 'text-ivory' : 'text-forest'}`}>
        {plan.price} <Text className={`text-xs ${dark ? 'text-sage' : 'text-muted'}`}>/ month</Text>
      </Text>

      <View className="gap-2">
        {plan.features.map((feature) => (
          <View key={feature} className="flex-row items-center gap-2">
            <Ionicons name="checkmark-circle" size={16} color={dark ? '#B58B58' : '#6B7452'} />
            <Text className={`text-xs ${dark ? 'text-ivory' : 'text-ink'}`}>{feature}</Text>
          </View>
        ))}
      </View>

      <Button
        label="Get Started"
        variant={dark ? 'light' : 'outline'}
        accessibilityLabel={`Get started with the ${plan.name}`}
        className="w-full"
      />
    </View>
  );
}
