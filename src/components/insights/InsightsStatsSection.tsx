import { useGroceryStore } from "@/src/store/grocery-store";
import { FontAwesome6 } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function InsightsStatsSection() {
  const { items } = useGroceryStore();

  const totalItems = items.length;
  const completedItems = items.filter((item) => item.purchased).length;
  const pendingItems = totalItems - completedItems;

  const completionRate = totalItems
    ? Math.round((completedItems / totalItems) * 100)
    : 0;

  const stats = [
    { label: "Pending", value: pendingItems, icon: "clock" },
    { label: "Completed", value: completedItems, icon: "check" },
    { label: "Total", value: totalItems, icon: "layer-group" },
  ];
  return (
    <>
      <View className="flex-row gap-2">
        {stats.map((stat) => (
          <View
            key={stat.label}
            className="flex-1 rounded-3xl border border-border bg-card p-4"
          >
            {/* Icon Wrapper */}
            <View className="h-8 w-8 items-center justify-center rounded-xl bg-accent">
              <FontAwesome6 name={stat.icon} size={18} color="#fff" />
            </View>

            {/* Label */}
            <Text className="mt-3 text-xs uppercase tracking-[1px] text-muted-foreground">
              {stat.label}
            </Text>

            {/* Value */}
            <Text className="mt-1 text-3xl font-extrabold text-foreground">
              {stat.value}
            </Text>
          </View>
        ))}
      </View>

      <View className="rounded-3xl border border-border bg-card p-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-sm font-semibold text-foreground">
            Completion rate
          </Text>
          <Text className="text-sm font-semibold text-primary">
            {completionRate}%
          </Text>
        </View>
        <View className="mt-3 overflow-hidden rounded-full bg-secondary">
          <View
            className="h-3 rounded-full bg-ring"
            style={{ width: `${Math.max(2, completionRate)}%` }}
          />
        </View>
      </View>
    </>
  );
}
