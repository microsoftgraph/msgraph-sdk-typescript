import {CopyNotebookModelImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyNotebookModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyNotebookModelImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyNotebookModelImpl();
}
