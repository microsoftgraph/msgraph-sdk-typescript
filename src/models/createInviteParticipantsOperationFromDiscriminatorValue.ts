import {InviteParticipantsOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInviteParticipantsOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : InviteParticipantsOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InviteParticipantsOperationImpl();
}
