import { View } from "react-native";
const PendingItemCardSkeleton = () => {
  return (
    <View className="rounded-3xl border border-border bg-card p-4 animate-pulse">
      <View className="flex-row items-start gap-3">
        <View className="mt-1 h-6 w-6 rounded-full bg-muted" />

        <View className="flex-1">
          <View className="flex-row items-center justify-between gap-2">
            <View className="h-6 w-1/2 rounded bg-muted" />
            <View className="h-6 w-16 rounded-full bg-muted" />
          </View>

          <View className="mt-3 flex-row items-center gap-2">
            <View className="h-6 w-24 rounded-full bg-muted" />
          </View>

          <View className="mt-3 flex-row items-center gap-2">
            <View className="h-8 w-8 rounded-xl bg-muted" />
            <View className="h-6 w-12 rounded bg-muted" />
            <View className="h-8 w-8 rounded-xl bg-muted" />
          </View>
        </View>

        <View className="h-9 w-9 rounded-xl bg-muted" />
      </View>
    </View>
  );
};

export default PendingItemCardSkeleton;
