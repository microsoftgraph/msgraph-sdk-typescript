import {WatermarkProtectionValues} from './watermarkProtectionValues';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWatermarkProtectionValues(watermarkProtectionValues: WatermarkProtectionValues | undefined = {} as WatermarkProtectionValues) : Record<string, (node: ParseNode) => void> {
    return {
        "isEnabledForContentSharing": n => { watermarkProtectionValues.isEnabledForContentSharing = n.getBooleanValue(); },
        "isEnabledForVideo": n => { watermarkProtectionValues.isEnabledForVideo = n.getBooleanValue(); },
        "@odata.type": n => { watermarkProtectionValues.odataType = n.getStringValue(); },
    }
}
