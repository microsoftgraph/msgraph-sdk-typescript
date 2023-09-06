import { deserializeIntoPrintDocumentCollectionResponse } from './deserializeIntoPrintDocumentCollectionResponse';
import { type PrintDocumentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintDocumentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintDocumentCollectionResponse;
}
