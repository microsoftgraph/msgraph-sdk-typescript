import {CopyToNotebookPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToNotebookPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToNotebookPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToNotebookPostRequestBodyImpl();
}
