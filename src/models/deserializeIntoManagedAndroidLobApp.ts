import { type AndroidMinimumOperatingSystem } from './androidMinimumOperatingSystem';
import { createAndroidMinimumOperatingSystemFromDiscriminatorValue } from './createAndroidMinimumOperatingSystemFromDiscriminatorValue';
import { deserializeIntoManagedMobileLobApp } from './deserializeIntoManagedMobileLobApp';
import { type ManagedAndroidLobApp } from './managedAndroidLobApp';
import { serializeAndroidMinimumOperatingSystem } from './serializeAndroidMinimumOperatingSystem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAndroidLobApp(managedAndroidLobApp: ManagedAndroidLobApp | undefined = {} as ManagedAndroidLobApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedMobileLobApp(managedAndroidLobApp),
        "minimumSupportedOperatingSystem": n => { managedAndroidLobApp.minimumSupportedOperatingSystem = n.getObjectValue<AndroidMinimumOperatingSystem>(createAndroidMinimumOperatingSystemFromDiscriminatorValue); },
        "packageId": n => { managedAndroidLobApp.packageId = n.getStringValue(); },
        "versionCode": n => { managedAndroidLobApp.versionCode = n.getStringValue(); },
        "versionName": n => { managedAndroidLobApp.versionName = n.getStringValue(); },
    }
}
