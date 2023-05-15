import {deserializeIntoPrintDocumentUploadProperties} from './deserializeIntoPrintDocumentUploadProperties';
import {PrintDocumentUploadProperties} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintDocumentUploadPropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintDocumentUploadProperties;
}
