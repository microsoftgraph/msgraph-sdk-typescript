import {PrintDocument} from './printDocument';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintDocument(writer: SerializationWriter, printDocument: PrintDocument | undefined = {} as PrintDocument) : void {
        serializeEntity(writer, printDocument)
        writer.writeStringValue("contentType", printDocument.contentType);
        writer.writeStringValue("displayName", printDocument.displayName);
        writer.writeNumberValue("size", printDocument.size);
}
