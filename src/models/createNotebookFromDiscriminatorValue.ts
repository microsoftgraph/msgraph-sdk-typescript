import {NotebookImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotebookFromDiscriminatorValue(parseNode: ParseNode | undefined) : NotebookImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NotebookImpl();
}
