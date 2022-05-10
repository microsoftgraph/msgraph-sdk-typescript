import {CopyToNotebookRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToNotebookRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToNotebookRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToNotebookRequestBodyImpl();
}
