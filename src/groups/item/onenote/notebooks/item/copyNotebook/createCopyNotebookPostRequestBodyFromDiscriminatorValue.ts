import {deserializeIntoCopyNotebookPostRequestBody} from './deserializeIntoCopyNotebookPostRequestBody';
import {CopyNotebookPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyNotebookPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCopyNotebookPostRequestBody;
}
