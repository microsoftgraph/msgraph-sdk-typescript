import {AssignMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignMember1();
}
