import { createWindowsMinimumOperatingSystemFromDiscriminatorValue } from './createWindowsMinimumOperatingSystemFromDiscriminatorValue';
import { deserializeIntoMobileLobApp } from './deserializeIntoMobileLobApp';
import { serializeWindowsMinimumOperatingSystem } from './serializeWindowsMinimumOperatingSystem';
import { type WindowsAppX } from './windowsAppX';
import { WindowsArchitecture } from './windowsArchitecture';
import { type WindowsMinimumOperatingSystem } from './windowsMinimumOperatingSystem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsAppX(windowsAppX: WindowsAppX | undefined = {} as WindowsAppX) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileLobApp(windowsAppX),
        "applicableArchitectures": n => { windowsAppX.applicableArchitectures = n.getCollectionOfEnumValues<WindowsArchitecture>(WindowsArchitecture); },
        "identityName": n => { windowsAppX.identityName = n.getStringValue(); },
        "identityPublisherHash": n => { windowsAppX.identityPublisherHash = n.getStringValue(); },
        "identityResourceIdentifier": n => { windowsAppX.identityResourceIdentifier = n.getStringValue(); },
        "identityVersion": n => { windowsAppX.identityVersion = n.getStringValue(); },
        "isBundle": n => { windowsAppX.isBundle = n.getBooleanValue(); },
        "minimumSupportedOperatingSystem": n => { windowsAppX.minimumSupportedOperatingSystem = n.getObjectValue<WindowsMinimumOperatingSystem>(createWindowsMinimumOperatingSystemFromDiscriminatorValue); },
    }
}
