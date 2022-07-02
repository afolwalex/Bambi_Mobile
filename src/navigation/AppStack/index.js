import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenCover from '../../components/ScreenCover';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardTabs from './DashboardTabs';
import Settings from '../../screens/App/Settings';
import EditProfile from '../../screens/App/EditProfile';
import CourseDetail from '../../screens/App/CourseDetail';
import Quiz from '../../screens/App/Quiz';
import Tasks from '../../screens/App/Tasks';
import CreateTask from '../../screens/App/CreateTask';
import ViewTask from '../../screens/App/ViewTask';
import Points from '../../screens/App/Points';
import Notifications from '../../screens/App/Notifications';
import FundWallet from '../../screens/App/FundWallet';
import Transfer from '../../screens/App/Transfer';
import Recharge from '../../screens/App/Recharge';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const AppStack = () => {
    const auth = useSelector(state => state.auth);
    const {user_details} = auth;

    return user_details ? (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                presentation: 'card',
            }}>
            <Stack.Screen name="Dashboard" component={DashboardTabs} />
            <Stack.Screen name="CourseDetail" component={CourseDetail} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="Task" component={Tasks} />
            <Stack.Screen name="CreateTask" component={CreateTask} />
            <Stack.Screen name="ViewTask" component={ViewTask} />
            <Stack.Screen name="Points" component={Points} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="FundWallet" component={FundWallet} />
            <Stack.Screen name="Transfer" component={Transfer} />
            <Stack.Screen name="Recharge" component={Recharge} />
        </Stack.Navigator>
    ) : (
        <View>
            <Text>Cannot view this page</Text>
        </View>
    );
};

export default AppStack;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
