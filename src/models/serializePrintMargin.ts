import {PrintMargin} from './printMargin';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintMargin(writer: SerializationWriter, printMargin: PrintMargin | undefined = {} as PrintMargin) : void {
        writer.writeNumberValue("bottom", printMargin.bottom);
        writer.writeNumberValue("left", printMargin.left);
        writer.writeStringValue("@odata.type", printMargin.odataType);
        writer.writeNumberValue("right", printMargin.right);
        writer.writeNumberValue("top", printMargin.top);
        writer.writeAdditionalData(printMargin.additionalData);
}
