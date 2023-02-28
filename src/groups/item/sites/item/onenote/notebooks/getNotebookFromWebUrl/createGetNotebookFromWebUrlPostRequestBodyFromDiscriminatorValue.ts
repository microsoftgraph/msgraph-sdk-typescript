import {GetNotebookFromWebUrlPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetNotebookFromWebUrlPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetNotebookFromWebUrlPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetNotebookFromWebUrlPostRequestBody();
}
