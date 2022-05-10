import {NotebookCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotebookCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : NotebookCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NotebookCollectionResponseImpl();
}
