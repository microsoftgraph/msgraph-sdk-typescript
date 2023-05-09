import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {createAndroidMinimumOperatingSystemFromDiscriminatorValue} from './createAndroidMinimumOperatingSystemFromDiscriminatorValue';
import {deserializeIntoManagedMobileLobApp} from './deserializeIntoManagedMobileLobApp';
import {ManagedAndroidLobApp} from './managedAndroidLobApp';
import {serializeAndroidMinimumOperatingSystem} from './serializeAndroidMinimumOperatingSystem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAndroidLobApp(managedAndroidLobApp: ManagedAndroidLobApp | undefined = {} as ManagedAndroidLobApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedMobileLobApp(managedAndroidLobApp),
        "minimumSupportedOperatingSystem": n => { managedAndroidLobApp.minimumSupportedOperatingSystem = n.getObjectValue<AndroidMinimumOperatingSystem>(createAndroidMinimumOperatingSystemFromDiscriminatorValue); },
        "packageId": n => { managedAndroidLobApp.packageId = n.getStringValue(); },
        "versionCode": n => { managedAndroidLobApp.versionCode = n.getStringValue(); },
        "versionName": n => { managedAndroidLobApp.versionName = n.getStringValue(); },
    }
}
