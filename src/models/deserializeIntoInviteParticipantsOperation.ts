import {createInvitationParticipantInfoFromDiscriminatorValue} from './createInvitationParticipantInfoFromDiscriminatorValue';
import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import type {InvitationParticipantInfo} from './invitationParticipantInfo';
import type {InviteParticipantsOperation} from './inviteParticipantsOperation';
import {serializeInvitationParticipantInfo} from './serializeInvitationParticipantInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInviteParticipantsOperation(inviteParticipantsOperation: InviteParticipantsOperation | undefined = {} as InviteParticipantsOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(inviteParticipantsOperation),
        "participants": n => { inviteParticipantsOperation.participants = n.getCollectionOfObjectValues<InvitationParticipantInfo>(createInvitationParticipantInfoFromDiscriminatorValue); },
    }
}
