import {GetNotebookFromWebUrlPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetNotebookFromWebUrlPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetNotebookFromWebUrlPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetNotebookFromWebUrlPostRequestBodyImpl();
}
