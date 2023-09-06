import { deserializeIntoGetNotebookFromWebUrlPostRequestBody } from './deserializeIntoGetNotebookFromWebUrlPostRequestBody';
import { type GetNotebookFromWebUrlPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetNotebookFromWebUrlPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetNotebookFromWebUrlPostRequestBody;
}
