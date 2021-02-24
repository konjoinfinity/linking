import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Linking } from 'react-native';
import AppLink from 'react-native-app-link';

class Open extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.openApp = this.openApp.bind(this);
    }


    openApp() {
        var testlink = Linking.openURL('twitter://')
        testlink._X == null ? Linking.openURL('https://apps.apple.com/us/app/twitter/id333903271') : Linking.openURL('twitter://')
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.wordButton}
                    onPress={() => Linking.openURL('https://lssoftware.sharepoint.com/')}>
                    <Text style={styles.wordButtonText}>Open KLS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.onedriveButton}
                    onPress={() => Linking.openURL('Word://')}>
                    <Text style={styles.onedriveButtonText}>Word</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.onedriveButton}
                    onPress={() => Linking.openURL('onedrive://')}>
                    <Text style={styles.onedriveButtonText}>OneDrive (Not working)</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.wordButton}
                    onPress={() => Linking.openURL('eBay://launch?itm=360703170135')}>
                    <Text style={styles.wordButtonText}>Open Ebay</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.onedriveButton}
                    onPress={() => this.openApp()}>
                    <Text style={styles.onedriveButtonText}>Open Twitter (If not installed, will open appstore)</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.wordButton}
                    onPress={() => Linking.openURL('YouTube://')}>
                    <Text style={styles.wordButtonText}>Open YouTube</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.onedriveButton}
                    onPress={() => Linking.openURL('fb://profile/33138223345')}>
                    <Text style={styles.onedriveButtonText}>Open Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.wordButton}
                    onPress={() => Linking.openURL('https://login.microsoftonline.com/login.srf?wa=wsignin1.0&whr=https://lssoftware.sharepoint.com/&wreply=https://office.live.com/start/Word.aspx?auth=2')}>
                    <Text style={styles.wordButtonText}>Office Online</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wordButton: {
        borderWidth: 1,
        borderColor: "#2C5F2D",
        backgroundColor: "#2C5F2D",
        padding: 15,
        margin: 5,
        borderRadius: 15
    },
    onedriveButton: {
        borderWidth: 1,
        borderColor: "#97BC62FF",
        backgroundColor: "#97BC62FF",
        padding: 15,
        margin: 5,
        borderRadius: 15
    },
    wordButtonText: {
        color: "#97BC62FF",
        fontSize: 20,
        textAlign: "center"
    },
    onedriveButtonText: {
        color: "#2C5F2D",
        fontSize: 20,
        textAlign: "center"
    }
});

export default Open;