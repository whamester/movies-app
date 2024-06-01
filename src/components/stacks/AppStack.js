import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import colors from "../../config/colors";
import MovieDetail from "../screens/MovieDetail";

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        title: "Movies App",
        headerStyle: {
          backgroundColor: colors.darkBlue,
        },
        headerTitleStyle: {
          color: colors.white,
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="MovieDetail"
        options={({ route }) => {
          return {
            title: route.params?.movieTitle,
            headerStyle: {
              backgroundColor: colors.white,
            },
            headerTitleStyle: {
              color: colors.black,
            },
            headerBackTitle: "Back to List",
          };
        }}
        component={MovieDetail}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStack;
