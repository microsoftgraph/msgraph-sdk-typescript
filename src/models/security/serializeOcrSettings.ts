import {OcrSettings} from './ocrSettings';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOcrSettings(writer: SerializationWriter, ocrSettings: OcrSettings | undefined = {} as OcrSettings) : void {
        writer.writeBooleanValue("isEnabled", ocrSettings.isEnabled);
        writer.writeNumberValue("maxImageSize", ocrSettings.maxImageSize);
        writer.writeStringValue("@odata.type", ocrSettings.odataType);
        writer.writeDurationValue("timeout", ocrSettings.timeout);
        writer.writeAdditionalData(ocrSettings.additionalData);
}
