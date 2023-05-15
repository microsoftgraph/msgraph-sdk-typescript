import {AndroidLobApp} from './androidLobApp';
import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {createAndroidMinimumOperatingSystemFromDiscriminatorValue} from './createAndroidMinimumOperatingSystemFromDiscriminatorValue';
import {deserializeIntoMobileLobApp} from './deserializeIntoMobileLobApp';
import {serializeAndroidMinimumOperatingSystem} from './serializeAndroidMinimumOperatingSystem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidLobApp(androidLobApp: AndroidLobApp | undefined = {} as AndroidLobApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileLobApp(androidLobApp),
        "minimumSupportedOperatingSystem": n => { androidLobApp.minimumSupportedOperatingSystem = n.getObjectValue<AndroidMinimumOperatingSystem>(createAndroidMinimumOperatingSystemFromDiscriminatorValue); },
        "packageId": n => { androidLobApp.packageId = n.getStringValue(); },
        "versionCode": n => { androidLobApp.versionCode = n.getStringValue(); },
        "versionName": n => { androidLobApp.versionName = n.getStringValue(); },
    }
}
