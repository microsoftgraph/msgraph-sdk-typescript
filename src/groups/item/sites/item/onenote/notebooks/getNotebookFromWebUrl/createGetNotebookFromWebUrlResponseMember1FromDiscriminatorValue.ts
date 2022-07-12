import {GetNotebookFromWebUrlResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetNotebookFromWebUrlResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetNotebookFromWebUrlResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetNotebookFromWebUrlResponseMember1();
}
