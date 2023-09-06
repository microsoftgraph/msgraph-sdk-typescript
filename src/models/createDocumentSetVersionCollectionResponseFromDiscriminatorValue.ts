import { deserializeIntoDocumentSetVersionCollectionResponse } from './deserializeIntoDocumentSetVersionCollectionResponse';
import { type DocumentSetVersionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDocumentSetVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDocumentSetVersionCollectionResponse;
}
