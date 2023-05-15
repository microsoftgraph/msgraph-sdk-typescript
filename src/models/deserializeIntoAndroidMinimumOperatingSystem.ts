import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidMinimumOperatingSystem(androidMinimumOperatingSystem: AndroidMinimumOperatingSystem | undefined = {} as AndroidMinimumOperatingSystem) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { androidMinimumOperatingSystem.odataType = n.getStringValue(); },
        "v10_0": n => { androidMinimumOperatingSystem.v10_0 = n.getBooleanValue(); },
        "v11_0": n => { androidMinimumOperatingSystem.v11_0 = n.getBooleanValue(); },
        "v4_0": n => { androidMinimumOperatingSystem.v4_0 = n.getBooleanValue(); },
        "v4_0_3": n => { androidMinimumOperatingSystem.v4_0_3 = n.getBooleanValue(); },
        "v4_1": n => { androidMinimumOperatingSystem.v4_1 = n.getBooleanValue(); },
        "v4_2": n => { androidMinimumOperatingSystem.v4_2 = n.getBooleanValue(); },
        "v4_3": n => { androidMinimumOperatingSystem.v4_3 = n.getBooleanValue(); },
        "v4_4": n => { androidMinimumOperatingSystem.v4_4 = n.getBooleanValue(); },
        "v5_0": n => { androidMinimumOperatingSystem.v5_0 = n.getBooleanValue(); },
        "v5_1": n => { androidMinimumOperatingSystem.v5_1 = n.getBooleanValue(); },
        "v6_0": n => { androidMinimumOperatingSystem.v6_0 = n.getBooleanValue(); },
        "v7_0": n => { androidMinimumOperatingSystem.v7_0 = n.getBooleanValue(); },
        "v7_1": n => { androidMinimumOperatingSystem.v7_1 = n.getBooleanValue(); },
        "v8_0": n => { androidMinimumOperatingSystem.v8_0 = n.getBooleanValue(); },
        "v8_1": n => { androidMinimumOperatingSystem.v8_1 = n.getBooleanValue(); },
        "v9_0": n => { androidMinimumOperatingSystem.v9_0 = n.getBooleanValue(); },
    }
}
