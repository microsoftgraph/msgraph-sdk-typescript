import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {createAndroidMinimumOperatingSystemFromDiscriminatorValue} from './createAndroidMinimumOperatingSystemFromDiscriminatorValue';
import {deserializeIntoManagedApp} from './deserializeIntoManagedApp';
import {ManagedAndroidStoreApp} from './managedAndroidStoreApp';
import {serializeAndroidMinimumOperatingSystem} from './serializeAndroidMinimumOperatingSystem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAndroidStoreApp(managedAndroidStoreApp: ManagedAndroidStoreApp | undefined = {} as ManagedAndroidStoreApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedApp(managedAndroidStoreApp),
        "appStoreUrl": n => { managedAndroidStoreApp.appStoreUrl = n.getStringValue(); },
        "minimumSupportedOperatingSystem": n => { managedAndroidStoreApp.minimumSupportedOperatingSystem = n.getObjectValue<AndroidMinimumOperatingSystem>(createAndroidMinimumOperatingSystemFromDiscriminatorValue); },
        "packageId": n => { managedAndroidStoreApp.packageId = n.getStringValue(); },
    }
}
