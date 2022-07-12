import {CopyNotebookResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyNotebookResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyNotebookResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyNotebookResponseMember1();
}
