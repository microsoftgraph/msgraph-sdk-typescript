import { deserializeIntoCopyToNotebookPostRequestBody } from './deserializeIntoCopyToNotebookPostRequestBody';
import { type CopyToNotebookPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCopyToNotebookPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCopyToNotebookPostRequestBody;
}
