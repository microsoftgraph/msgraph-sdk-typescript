import {deserializeIntoPrintDocumentCollectionResponse} from './deserializeIntoPrintDocumentCollectionResponse';
import {PrintDocumentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintDocumentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintDocumentCollectionResponse;
}
