import {deserializeIntoInviteParticipantsOperation} from './deserializeIntoInviteParticipantsOperation';
import {InviteParticipantsOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInviteParticipantsOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInviteParticipantsOperation;
}
