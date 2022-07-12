import {ReassignResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReassignResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ReassignResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReassignResponseMember1();
}
