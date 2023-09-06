import { deserializeIntoInviteParticipantsOperation } from './deserializeIntoInviteParticipantsOperation';
import { type InviteParticipantsOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInviteParticipantsOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInviteParticipantsOperation;
}
