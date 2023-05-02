import {WindowsMinimumOperatingSystem} from './windowsMinimumOperatingSystem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsMinimumOperatingSystem(windowsMinimumOperatingSystem: WindowsMinimumOperatingSystem | undefined = {} as WindowsMinimumOperatingSystem) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { windowsMinimumOperatingSystem.odataType = n.getStringValue(); },
        "v10_0": n => { windowsMinimumOperatingSystem.v10_0 = n.getBooleanValue(); },
        "v8_0": n => { windowsMinimumOperatingSystem.v8_0 = n.getBooleanValue(); },
        "v8_1": n => { windowsMinimumOperatingSystem.v8_1 = n.getBooleanValue(); },
    }
}
