import {WatermarkProtectionValues} from './watermarkProtectionValues';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWatermarkProtectionValues(watermarkProtectionValues: WatermarkProtectionValues | undefined = {} as WatermarkProtectionValues, writer: SerializationWriter) : void {
        writer.writeBooleanValue("isEnabledForContentSharing", watermarkProtectionValues.isEnabledForContentSharing);
        writer.writeBooleanValue("isEnabledForVideo", watermarkProtectionValues.isEnabledForVideo);
        writer.writeStringValue("@odata.type", watermarkProtectionValues.odataType);
        writer.writeAdditionalData(watermarkProtectionValues.additionalData);
}
