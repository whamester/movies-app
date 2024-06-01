import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MoviesContainer from "../containers/MoviesContainer";
import SearchResultsContainer from "../containers/SearchResultsContainer";
import { STREAMING_CATEGORY } from "../../config/contants";

const Tab = createMaterialTopTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "none",
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={MoviesContainer}
        initialParams={{ category: STREAMING_CATEGORY.MOVIE }}
      />
      <Tab.Screen name="Search Results" component={SearchResultsContainer} />
      <Tab.Screen
        name="TV Shows"
        component={MoviesContainer}
        initialParams={{ category: STREAMING_CATEGORY.TV_SERIES }}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
