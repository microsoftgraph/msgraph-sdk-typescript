import { deserializeIntoPrintDocument } from './deserializeIntoPrintDocument';
import { type PrintDocument } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintDocumentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintDocument;
}
