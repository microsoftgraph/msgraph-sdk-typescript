import {CopyToNotebookPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToNotebookPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToNotebookPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToNotebookPostRequestBody();
}
