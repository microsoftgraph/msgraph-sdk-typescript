import { createIosDeviceTypeFromDiscriminatorValue } from './createIosDeviceTypeFromDiscriminatorValue';
import { createIosMinimumOperatingSystemFromDiscriminatorValue } from './createIosMinimumOperatingSystemFromDiscriminatorValue';
import { deserializeIntoManagedMobileLobApp } from './deserializeIntoManagedMobileLobApp';
import { type IosDeviceType } from './iosDeviceType';
import { type IosMinimumOperatingSystem } from './iosMinimumOperatingSystem';
import { type ManagedIOSLobApp } from './managedIOSLobApp';
import { serializeIosDeviceType } from './serializeIosDeviceType';
import { serializeIosMinimumOperatingSystem } from './serializeIosMinimumOperatingSystem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedIOSLobApp(managedIOSLobApp: ManagedIOSLobApp | undefined = {} as ManagedIOSLobApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedMobileLobApp(managedIOSLobApp),
        "applicableDeviceType": n => { managedIOSLobApp.applicableDeviceType = n.getObjectValue<IosDeviceType>(createIosDeviceTypeFromDiscriminatorValue); },
        "buildNumber": n => { managedIOSLobApp.buildNumber = n.getStringValue(); },
        "bundleId": n => { managedIOSLobApp.bundleId = n.getStringValue(); },
        "expirationDateTime": n => { managedIOSLobApp.expirationDateTime = n.getDateValue(); },
        "minimumSupportedOperatingSystem": n => { managedIOSLobApp.minimumSupportedOperatingSystem = n.getObjectValue<IosMinimumOperatingSystem>(createIosMinimumOperatingSystemFromDiscriminatorValue); },
        "versionNumber": n => { managedIOSLobApp.versionNumber = n.getStringValue(); },
    }
}
