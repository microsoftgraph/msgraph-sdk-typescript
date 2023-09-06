import { deserializeIntoPrintDocumentUploadProperties } from './deserializeIntoPrintDocumentUploadProperties';
import { type PrintDocumentUploadProperties } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintDocumentUploadPropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintDocumentUploadProperties;
}
