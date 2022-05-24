import {CopyNotebookPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyNotebookPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyNotebookPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyNotebookPostRequestBodyImpl();
}
