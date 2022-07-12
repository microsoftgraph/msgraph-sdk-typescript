import {CopyToNotebookResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToNotebookResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToNotebookResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToNotebookResponseMember1();
}
