import React from 'react';
import { Button } from 'react-native';
import AppLink from 'react-native-app-link';

const url = "lyft://"
const appName = "lyft"
const appStoreId = "529379082"
const appStoreLocale = "il"
const playStoreId = "me.lyft.android"

class Open extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.openApp = this.openApp.bind(this);
    }

    openApp() {
        AppLink.maybeOpenURL(url, { appName, appStoreId, appStoreLocale, playStoreId }).then(() => {
            // do stuff
        })
            .catch((err) => {
                console.log(err)
            });

        // maybeOpenURL(url, config) -> Promise Opens link if app is present. If not, it opens an app store to prompt the user to download it.
        // url: (String) a url in the specified app's deep linking format that points to the content you want to open.

        // config: (Object) a set of fallback urls if the app requested does not exist locally.

        // config.appName: (String) the app's name you're linking into.

        // config.appStoreId: (String) the app's ID on the App Store (iOS). Example: { appStoreId: '529379082' }

        // config.appStoreLocale: (String) the App Store's locale (iOS). Defaults to the USA App Store. Example: { appStoreId: 'us' }

        // config.playStoreId: (String) the app's package identifier on the Play Store (Android). Example: { playStoreId: 'me.lyft.android' }
    }

    render() {
        return (
            <Button title="Open KLS" color="#f194ff" onPress={() => this.openApp()}></Button>
        )
    }
}

export default Open;