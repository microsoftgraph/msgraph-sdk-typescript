import { createIosDeviceTypeFromDiscriminatorValue } from './createIosDeviceTypeFromDiscriminatorValue';
import { createIosMinimumOperatingSystemFromDiscriminatorValue } from './createIosMinimumOperatingSystemFromDiscriminatorValue';
import { deserializeIntoManagedApp } from './deserializeIntoManagedApp';
import { type IosDeviceType } from './iosDeviceType';
import { type IosMinimumOperatingSystem } from './iosMinimumOperatingSystem';
import { type ManagedIOSStoreApp } from './managedIOSStoreApp';
import { serializeIosDeviceType } from './serializeIosDeviceType';
import { serializeIosMinimumOperatingSystem } from './serializeIosMinimumOperatingSystem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedIOSStoreApp(managedIOSStoreApp: ManagedIOSStoreApp | undefined = {} as ManagedIOSStoreApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedApp(managedIOSStoreApp),
        "applicableDeviceType": n => { managedIOSStoreApp.applicableDeviceType = n.getObjectValue<IosDeviceType>(createIosDeviceTypeFromDiscriminatorValue); },
        "appStoreUrl": n => { managedIOSStoreApp.appStoreUrl = n.getStringValue(); },
        "bundleId": n => { managedIOSStoreApp.bundleId = n.getStringValue(); },
        "minimumSupportedOperatingSystem": n => { managedIOSStoreApp.minimumSupportedOperatingSystem = n.getObjectValue<IosMinimumOperatingSystem>(createIosMinimumOperatingSystemFromDiscriminatorValue); },
    }
}
