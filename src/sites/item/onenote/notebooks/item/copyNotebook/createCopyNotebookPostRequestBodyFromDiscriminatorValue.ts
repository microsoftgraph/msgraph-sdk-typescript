import { deserializeIntoCopyNotebookPostRequestBody } from './deserializeIntoCopyNotebookPostRequestBody';
import { type CopyNotebookPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCopyNotebookPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCopyNotebookPostRequestBody;
}
