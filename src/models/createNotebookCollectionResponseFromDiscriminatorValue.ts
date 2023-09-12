import { deserializeIntoNotebookCollectionResponse } from './deserializeIntoNotebookCollectionResponse';
import { type NotebookCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createNotebookCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNotebookCollectionResponse;
}
