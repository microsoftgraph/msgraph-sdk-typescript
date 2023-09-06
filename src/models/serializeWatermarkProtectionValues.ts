import { type WatermarkProtectionValues } from './watermarkProtectionValues';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWatermarkProtectionValues(writer: SerializationWriter, watermarkProtectionValues: WatermarkProtectionValues | undefined = {} as WatermarkProtectionValues) : void {
        writer.writeBooleanValue("isEnabledForContentSharing", watermarkProtectionValues.isEnabledForContentSharing);
        writer.writeBooleanValue("isEnabledForVideo", watermarkProtectionValues.isEnabledForVideo);
        writer.writeStringValue("@odata.type", watermarkProtectionValues.odataType);
        writer.writeAdditionalData(watermarkProtectionValues.additionalData);
}
