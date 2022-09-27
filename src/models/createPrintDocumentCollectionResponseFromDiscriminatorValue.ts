import {PrintDocumentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintDocumentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintDocumentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintDocumentCollectionResponse();
}
