import {InvitationParticipantInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvitationParticipantInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : InvitationParticipantInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InvitationParticipantInfoImpl();
}
