import {RejectMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRejectMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : RejectMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RejectMember1();
}
