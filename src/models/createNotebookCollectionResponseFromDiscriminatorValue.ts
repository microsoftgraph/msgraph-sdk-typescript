import {deserializeIntoNotebookCollectionResponse} from './deserializeIntoNotebookCollectionResponse';
import {NotebookCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotebookCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNotebookCollectionResponse;
}
