import {deserializeIntoCopyToNotebookPostRequestBody} from './deserializeIntoCopyToNotebookPostRequestBody';
import {CopyToNotebookPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToNotebookPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCopyToNotebookPostRequestBody;
}
