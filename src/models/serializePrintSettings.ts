import {PrintSettings} from './printSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintSettings(writer: SerializationWriter, printSettings: PrintSettings | undefined = {} as PrintSettings) : void {
        writer.writeBooleanValue("documentConversionEnabled", printSettings.documentConversionEnabled);
        writer.writeStringValue("@odata.type", printSettings.odataType);
        writer.writeAdditionalData(printSettings.additionalData);
}
