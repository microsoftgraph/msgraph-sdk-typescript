import { type PrintDocumentUploadProperties } from './printDocumentUploadProperties';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintDocumentUploadProperties(printDocumentUploadProperties: PrintDocumentUploadProperties | undefined = {} as PrintDocumentUploadProperties) : Record<string, (node: ParseNode) => void> {
    return {
        "contentType": n => { printDocumentUploadProperties.contentType = n.getStringValue(); },
        "documentName": n => { printDocumentUploadProperties.documentName = n.getStringValue(); },
        "@odata.type": n => { printDocumentUploadProperties.odataType = n.getStringValue(); },
        "size": n => { printDocumentUploadProperties.size = n.getNumberValue(); },
    }
}
