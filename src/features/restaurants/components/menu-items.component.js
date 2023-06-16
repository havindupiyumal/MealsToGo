import React from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

export const MenuItems = () => {
  const [breakfastExpanded, setBreakfastExpanded] = React.useState(true);
  const [lunchExpanded, setLunchExpanded] = React.useState(true);
  const [dinnerExpanded, setDinnerExpanded] = React.useState(true);
  const [drinksExpanded, setDrinksExpanded] = React.useState(true);

  const handlePressBreakfastExpanded = () =>
    setBreakfastExpanded(!breakfastExpanded);
  const handlePressLunchExpanded = () => setLunchExpanded(!lunchExpanded);
  const handlePressDinnerExpanded = () => setDinnerExpanded(!dinnerExpanded);
  const handlePressDrinksExpanded = () => setDrinksExpanded(!drinksExpanded);

  return (
    <List.Section title="Menu Items">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={handlePressBreakfastExpanded}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => (
            <List.Icon {...props} icon="silverware-fork-knife" />
          )}
          expanded={lunchExpanded}
          onPress={handlePressLunchExpanded}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-fork-drink" />}
          expanded={dinnerExpanded}
          onPress={handlePressDinnerExpanded}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutet with Chicken Mushroom" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="bottle-wine" />}
          expanded={drinksExpanded}
          onPress={handlePressDrinksExpanded}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </List.Section>
  );
};
