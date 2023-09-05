import { type AndroidMinimumOperatingSystem } from './androidMinimumOperatingSystem';
import { type AndroidStoreApp } from './androidStoreApp';
import { createAndroidMinimumOperatingSystemFromDiscriminatorValue } from './createAndroidMinimumOperatingSystemFromDiscriminatorValue';
import { deserializeIntoMobileApp } from './deserializeIntoMobileApp';
import { serializeAndroidMinimumOperatingSystem } from './serializeAndroidMinimumOperatingSystem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidStoreApp(androidStoreApp: AndroidStoreApp | undefined = {} as AndroidStoreApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(androidStoreApp),
        "appStoreUrl": n => { androidStoreApp.appStoreUrl = n.getStringValue(); },
        "minimumSupportedOperatingSystem": n => { androidStoreApp.minimumSupportedOperatingSystem = n.getObjectValue<AndroidMinimumOperatingSystem>(createAndroidMinimumOperatingSystemFromDiscriminatorValue); },
        "packageId": n => { androidStoreApp.packageId = n.getStringValue(); },
    }
}
