import {InviteMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInviteMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : InviteMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InviteMember1();
}
