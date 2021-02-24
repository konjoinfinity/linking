import React from 'react';
import { Button } from 'react-native';
import AppLink from 'react-native-app-link';

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
                // handle error
            });

        AppLink.openInStore({ appName, appStoreId, appStoreLocale, playStoreId }).then(() => {
            // do stuff
        })
            .catch((err) => {
                // handle error
            });
    }

    render() {
        return (
            <Button title="Open KLS" color="#f194ff" onPress={() => this.openApp()}></Button>
        )
    }
}

export default Open;