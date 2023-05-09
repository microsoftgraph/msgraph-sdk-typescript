import {deserializeIntoPrintDocument} from './deserializeIntoPrintDocument';
import {PrintDocument} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintDocumentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintDocument;
}
