import {NotebookLinksImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotebookLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) : NotebookLinksImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NotebookLinksImpl();
}
