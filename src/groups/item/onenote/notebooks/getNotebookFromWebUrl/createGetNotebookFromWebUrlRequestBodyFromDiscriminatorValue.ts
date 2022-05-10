import {GetNotebookFromWebUrlRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetNotebookFromWebUrlRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetNotebookFromWebUrlRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetNotebookFromWebUrlRequestBodyImpl();
}
