import { createStackNavigator } from "react-navigation-stack";
import SearchsScreen from "../screens/Search";

const SearchsScreenStacks = createStackNavigator({
  Searchs: {
    screen: SearchsScreen,
    navigationOptions: () => ({
      title: "Búsqueda de restaurantes"
    })
  }
});

export default SearchsScreenStacks;
