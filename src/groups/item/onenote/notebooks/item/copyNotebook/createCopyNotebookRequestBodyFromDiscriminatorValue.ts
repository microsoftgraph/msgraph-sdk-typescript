import {CopyNotebookRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyNotebookRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyNotebookRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyNotebookRequestBodyImpl();
}
