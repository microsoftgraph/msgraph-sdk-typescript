import type {PrintDocumentUploadProperties} from './printDocumentUploadProperties';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintDocumentUploadProperties(writer: SerializationWriter, printDocumentUploadProperties: PrintDocumentUploadProperties | undefined = {} as PrintDocumentUploadProperties) : void {
        writer.writeStringValue("contentType", printDocumentUploadProperties.contentType);
        writer.writeStringValue("documentName", printDocumentUploadProperties.documentName);
        writer.writeStringValue("@odata.type", printDocumentUploadProperties.odataType);
        writer.writeNumberValue("size", printDocumentUploadProperties.size);
        writer.writeAdditionalData(printDocumentUploadProperties.additionalData);
}
