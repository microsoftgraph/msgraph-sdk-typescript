import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosMinimumOperatingSystem(iosMinimumOperatingSystem: IosMinimumOperatingSystem | undefined = {} as IosMinimumOperatingSystem) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { iosMinimumOperatingSystem.odataType = n.getStringValue(); },
        "v10_0": n => { iosMinimumOperatingSystem.v10_0 = n.getBooleanValue(); },
        "v11_0": n => { iosMinimumOperatingSystem.v11_0 = n.getBooleanValue(); },
        "v12_0": n => { iosMinimumOperatingSystem.v12_0 = n.getBooleanValue(); },
        "v13_0": n => { iosMinimumOperatingSystem.v13_0 = n.getBooleanValue(); },
        "v14_0": n => { iosMinimumOperatingSystem.v14_0 = n.getBooleanValue(); },
        "v15_0": n => { iosMinimumOperatingSystem.v15_0 = n.getBooleanValue(); },
        "v8_0": n => { iosMinimumOperatingSystem.v8_0 = n.getBooleanValue(); },
        "v9_0": n => { iosMinimumOperatingSystem.v9_0 = n.getBooleanValue(); },
    }
}
