import CompletedItems from "@/src/components/list/CompletedItems";
import ListHeroCard from "@/src/components/list/ListHeroCard";
import PendingItemCard from "@/src/components/list/PendingItemCard";
import PendingItemCardSkeleton from "@/src/components/list/PendingItemCardSkeleton";
import TabScreenBackground from "@/src/components/TabScreenBackground";
import { useGroceryStore } from "@/src/store/grocery-store";
import { FlatList, Text, View } from "react-native";

export default function ListScreen() {
  const { items, isLoading } = useGroceryStore();

  const pendingItems = items.filter((item) => !item.purchased);

  return (
    <FlatList
      className="flex-1 bg-background"
      contentInsetAdjustmentBehavior="automatic"
      data={pendingItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) =>
        isLoading ? (
          <PendingItemCardSkeleton />
        ) : (
          <PendingItemCard item={item} />
        )
      }
      contentContainerStyle={{ padding: 20, gap: 14 }}
      ListHeaderComponent={
        <View className="gap-4 pt-5">
          <TabScreenBackground />
          <ListHeroCard />
          <View className="flex-row items-center justify-between px-1">
            <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
              Shopping items
            </Text>
            <Text className="text-sm text-muted-foreground">
              {pendingItems.length} active
            </Text>
          </View>
        </View>
      }
      ListFooterComponent={<CompletedItems />}
    />
  );
}
