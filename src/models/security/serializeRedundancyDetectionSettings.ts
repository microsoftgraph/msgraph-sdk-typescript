import { type RedundancyDetectionSettings } from './redundancyDetectionSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRedundancyDetectionSettings(writer: SerializationWriter, redundancyDetectionSettings: RedundancyDetectionSettings | undefined = {} as RedundancyDetectionSettings) : void {
        writer.writeBooleanValue("isEnabled", redundancyDetectionSettings.isEnabled);
        writer.writeNumberValue("maxWords", redundancyDetectionSettings.maxWords);
        writer.writeNumberValue("minWords", redundancyDetectionSettings.minWords);
        writer.writeStringValue("@odata.type", redundancyDetectionSettings.odataType);
        writer.writeNumberValue("similarityThreshold", redundancyDetectionSettings.similarityThreshold);
        writer.writeAdditionalData(redundancyDetectionSettings.additionalData);
}
