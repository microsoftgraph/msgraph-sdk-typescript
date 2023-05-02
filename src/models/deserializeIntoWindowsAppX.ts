import {createWindowsMinimumOperatingSystemFromDiscriminatorValue} from './createWindowsMinimumOperatingSystemFromDiscriminatorValue';
import {deserializeIntoMobileLobApp} from './deserializeIntoMobileLobApp';
import {serializeWindowsMinimumOperatingSystem} from './serializeWindowsMinimumOperatingSystem';
import {WindowsAppX} from './windowsAppX';
import {WindowsArchitecture} from './windowsArchitecture';
import {WindowsMinimumOperatingSystem} from './windowsMinimumOperatingSystem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsAppX(windowsAppX: WindowsAppX | undefined = {} as WindowsAppX) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileLobApp(windowsAppX),
        "applicableArchitectures": n => { windowsAppX.applicableArchitectures = n.getEnumValue<WindowsArchitecture>(WindowsArchitecture); },
        "identityName": n => { windowsAppX.identityName = n.getStringValue(); },
        "identityPublisherHash": n => { windowsAppX.identityPublisherHash = n.getStringValue(); },
        "identityResourceIdentifier": n => { windowsAppX.identityResourceIdentifier = n.getStringValue(); },
        "identityVersion": n => { windowsAppX.identityVersion = n.getStringValue(); },
        "isBundle": n => { windowsAppX.isBundle = n.getBooleanValue(); },
        "minimumSupportedOperatingSystem": n => { windowsAppX.minimumSupportedOperatingSystem = n.getObjectValue<WindowsMinimumOperatingSystem>(createWindowsMinimumOperatingSystemFromDiscriminatorValue); },
    }
}
