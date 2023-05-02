import {createMobileContainedAppFromDiscriminatorValue} from './createMobileContainedAppFromDiscriminatorValue';
import {createWindowsMinimumOperatingSystemFromDiscriminatorValue} from './createWindowsMinimumOperatingSystemFromDiscriminatorValue';
import {deserializeIntoMobileLobApp} from './deserializeIntoMobileLobApp';
import {MobileContainedApp} from './mobileContainedApp';
import {serializeMobileContainedApp} from './serializeMobileContainedApp';
import {serializeWindowsMinimumOperatingSystem} from './serializeWindowsMinimumOperatingSystem';
import {WindowsArchitecture} from './windowsArchitecture';
import {WindowsDeviceType} from './windowsDeviceType';
import {WindowsMinimumOperatingSystem} from './windowsMinimumOperatingSystem';
import {WindowsUniversalAppX} from './windowsUniversalAppX';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUniversalAppX(windowsUniversalAppX: WindowsUniversalAppX | undefined = {} as WindowsUniversalAppX) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileLobApp(windowsUniversalAppX),
        "applicableArchitectures": n => { windowsUniversalAppX.applicableArchitectures = n.getEnumValue<WindowsArchitecture>(WindowsArchitecture); },
        "applicableDeviceTypes": n => { windowsUniversalAppX.applicableDeviceTypes = n.getEnumValue<WindowsDeviceType>(WindowsDeviceType); },
        "committedContainedApps": n => { windowsUniversalAppX.committedContainedApps = n.getCollectionOfObjectValues<MobileContainedApp>(createMobileContainedAppFromDiscriminatorValue); },
        "identityName": n => { windowsUniversalAppX.identityName = n.getStringValue(); },
        "identityPublisherHash": n => { windowsUniversalAppX.identityPublisherHash = n.getStringValue(); },
        "identityResourceIdentifier": n => { windowsUniversalAppX.identityResourceIdentifier = n.getStringValue(); },
        "identityVersion": n => { windowsUniversalAppX.identityVersion = n.getStringValue(); },
        "isBundle": n => { windowsUniversalAppX.isBundle = n.getBooleanValue(); },
        "minimumSupportedOperatingSystem": n => { windowsUniversalAppX.minimumSupportedOperatingSystem = n.getObjectValue<WindowsMinimumOperatingSystem>(createWindowsMinimumOperatingSystemFromDiscriminatorValue); },
    }
}
