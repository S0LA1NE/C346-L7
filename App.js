import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
        <Text style={{fontSize: 24}}>RP Values</Text>
        <Text style={{color: "green"}}>Excellence</Text>
        <Text style={{backgroundColor: "yellow"}}>Customer-Centric</Text>
        <Text style={{fontStyle: "italic"}}>Integrity</Text>
        <Text style={{textAlign: "center"}}>Teamwork</Text>
        <Text style={{backgroundColor: "black", color: "white"}}>Enterprising</Text>
        {/*          ^ no need for array */}

        <View style={styles.greenBox}>
            <Text style={[styles.boxText, styles.title]}>Who we are</Text>
            {/*          ^ use array for both styles. ^    */}
        </View>
        <View style={styles.greenBox}>
            <Text style={styles.boxText}>Our People</Text>
        </View>
        <View style={styles.greenBox}>
            <Text style={styles.boxText}>Our Campus</Text>
        </View>

        <View style={ [styles.Parent, {flexDirection: "row"}]}>
            {/*                       ^ overrides styles.Parent: { flexDirection: 'column' } to "row" */}
            <Text style={ [styles.Child, {backgroundColor: "powderblue", flex: 1}] }>Child One</Text>
            <Text style={ [styles.Child, {backgroundColor: "skyblue", flex: 1}] }>Child Two</Text>
            <Text style={ [styles.Child, {backgroundColor: "steelblue", flex: 1}] }>Child Three</Text>
            {/*           ^ use array,   ^ curly bracket */}
        </View>
        <View style={styles.Parent}>
            <Text style={ [styles.Child, {backgroundColor: "powderblue"}, {}] }>Child One</Text>
            <Text style={ [styles.Child, {backgroundColor: "skyblue"}] }>Child Two</Text>
            <Text style={ [styles.Child, {backgroundColor: "steelblue"}] }>Child Three</Text>
        </View>
        <View style={ [styles.Parent, {height: 500}] }>
            <Text style={ [styles.Child, {backgroundColor: "powderblue", maxWidth: 90, flex: 1}] }>Child One</Text>
            <Text style={ [styles.Child, {backgroundColor: "skyblue", flex: 1}] }>Child Two</Text>
            <Text style={ [styles.Child, {backgroundColor: "steelblue", maxHeight: 120, flex: 1}] }>Child Three</Text>
            {/*           ^ use array,   ^ curly bracket              ^ comma                  ^ curly bracket */}
        </View>
        <View style={ [styles.Parent, {flexDirection: "row"}] }>
            <Text style={ [styles.Child, {backgroundColor: "powderblue", flex: 1}] }>Child One</Text>
            <Text style={ [styles.Child, {backgroundColor: "skyblue", flex: 2}] }>Child Two</Text>
            <Text style={ [styles.Child, {backgroundColor: "steelblue", flex: 3}] }>Child Three</Text>
            {/*           ^ use array,   ^ curly bracket              ^ comma  ^ curly bracket */}
        </View>

        <View style={ [styles.Parent, {height: 500}] }>
            <Text style={ [styles.Child, {backgroundColor: "powderblue", height: 50}] }>Child One</Text>
            <Text style={ [styles.Child, {backgroundColor: "skyblue", height: 50}] }>Child Two</Text>
            <Text style={ [styles.Child, {backgroundColor: "steelblue", height: 50}] }>Child Three</Text>
            {/*           ^ use array,   ^ curly bracket  */}
        </View>
        <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    greenBox: {
        width: 100, // no px needed
        height: 100,
        marginTop: 30,
        backgroundColor: "green",
        borderWidth: 1,
        borderColor: "black",
    },
    boxText: {
        textAlign: 'center',
        color: "white"
    },
    title: {
        fontWeight: "bold"
    },
    Parent: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        // justifyContent: "flex-start",
        // justifyContent: "flex-end",
        // justifyContent: "space-around",
        justifyContent: "space-between",
    },
    Child: {
        //flex: 1, // flex: 1 so each child → equal width, they will fill entire parent / screen
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    }
});
