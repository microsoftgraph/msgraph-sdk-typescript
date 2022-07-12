import {GetNotebookFromWebUrlMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetNotebookFromWebUrlMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetNotebookFromWebUrlMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetNotebookFromWebUrlMember1();
}
