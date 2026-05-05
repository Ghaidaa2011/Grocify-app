import PlannerFormCard from "@/src/components/planner/PlannerFormCard ";
import PlannerHeroCard from "@/src/components/planner/PlannerHeroCard";
import PlannerHeroImage from "@/src/components/planner/PlannerHeroImage";
import TabScreenBackground from "@/src/components/TabScreenBackground";
import { Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const PlannerScreen = () => {
  return (
    <KeyboardAwareScrollView
      bottomOffset={80}
      contentContainerStyle={{ padding: 20, gap: 14 }}
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-background py-4"
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
    >
      <TabScreenBackground />
      <PlannerHeroCard />
      <PlannerHeroImage />
      <View className="px-1">
        <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
          Build your list
        </Text>
        <Text className="mt-1 text-sm text-muted-foreground">
          Add items with the right quantity, category, and urgency.
        </Text>
      </View>
      <PlannerFormCard />
    </KeyboardAwareScrollView>
  );
};
export default PlannerScreen;
