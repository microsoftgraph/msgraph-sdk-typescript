import { createMobileContainedAppFromDiscriminatorValue } from './createMobileContainedAppFromDiscriminatorValue';
import { createWindowsMinimumOperatingSystemFromDiscriminatorValue } from './createWindowsMinimumOperatingSystemFromDiscriminatorValue';
import { deserializeIntoMobileLobApp } from './deserializeIntoMobileLobApp';
import { type MobileContainedApp } from './mobileContainedApp';
import { serializeMobileContainedApp } from './serializeMobileContainedApp';
import { serializeWindowsMinimumOperatingSystem } from './serializeWindowsMinimumOperatingSystem';
import { WindowsArchitecture } from './windowsArchitecture';
import { WindowsDeviceType } from './windowsDeviceType';
import { type WindowsMinimumOperatingSystem } from './windowsMinimumOperatingSystem';
import { type WindowsUniversalAppX } from './windowsUniversalAppX';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUniversalAppX(windowsUniversalAppX: WindowsUniversalAppX | undefined = {} as WindowsUniversalAppX) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileLobApp(windowsUniversalAppX),
        "applicableArchitectures": n => { windowsUniversalAppX.applicableArchitectures = n.getCollectionOfEnumValues<WindowsArchitecture>(WindowsArchitecture); },
        "applicableDeviceTypes": n => { windowsUniversalAppX.applicableDeviceTypes = n.getCollectionOfEnumValues<WindowsDeviceType>(WindowsDeviceType); },
        "committedContainedApps": n => { windowsUniversalAppX.committedContainedApps = n.getCollectionOfObjectValues<MobileContainedApp>(createMobileContainedAppFromDiscriminatorValue); },
        "identityName": n => { windowsUniversalAppX.identityName = n.getStringValue(); },
        "identityPublisherHash": n => { windowsUniversalAppX.identityPublisherHash = n.getStringValue(); },
        "identityResourceIdentifier": n => { windowsUniversalAppX.identityResourceIdentifier = n.getStringValue(); },
        "identityVersion": n => { windowsUniversalAppX.identityVersion = n.getStringValue(); },
        "isBundle": n => { windowsUniversalAppX.isBundle = n.getBooleanValue(); },
        "minimumSupportedOperatingSystem": n => { windowsUniversalAppX.minimumSupportedOperatingSystem = n.getObjectValue<WindowsMinimumOperatingSystem>(createWindowsMinimumOperatingSystemFromDiscriminatorValue); },
    }
}
