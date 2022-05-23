import {InvitationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvitationFromDiscriminatorValue(parseNode: ParseNode | undefined) : InvitationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InvitationImpl();
}
