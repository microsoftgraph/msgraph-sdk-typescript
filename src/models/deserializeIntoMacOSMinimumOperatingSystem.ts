import {MacOSMinimumOperatingSystem} from './macOSMinimumOperatingSystem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSMinimumOperatingSystem(macOSMinimumOperatingSystem: MacOSMinimumOperatingSystem | undefined = {} as MacOSMinimumOperatingSystem) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { macOSMinimumOperatingSystem.odataType = n.getStringValue(); },
        "v10_10": n => { macOSMinimumOperatingSystem.v10_10 = n.getBooleanValue(); },
        "v10_11": n => { macOSMinimumOperatingSystem.v10_11 = n.getBooleanValue(); },
        "v10_12": n => { macOSMinimumOperatingSystem.v10_12 = n.getBooleanValue(); },
        "v10_13": n => { macOSMinimumOperatingSystem.v10_13 = n.getBooleanValue(); },
        "v10_14": n => { macOSMinimumOperatingSystem.v10_14 = n.getBooleanValue(); },
        "v10_15": n => { macOSMinimumOperatingSystem.v10_15 = n.getBooleanValue(); },
        "v10_7": n => { macOSMinimumOperatingSystem.v10_7 = n.getBooleanValue(); },
        "v10_8": n => { macOSMinimumOperatingSystem.v10_8 = n.getBooleanValue(); },
        "v10_9": n => { macOSMinimumOperatingSystem.v10_9 = n.getBooleanValue(); },
        "v11_0": n => { macOSMinimumOperatingSystem.v11_0 = n.getBooleanValue(); },
        "v12_0": n => { macOSMinimumOperatingSystem.v12_0 = n.getBooleanValue(); },
        "v13_0": n => { macOSMinimumOperatingSystem.v13_0 = n.getBooleanValue(); },
    }
}
