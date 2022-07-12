import {InviteResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInviteResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : InviteResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InviteResponseMember1();
}
