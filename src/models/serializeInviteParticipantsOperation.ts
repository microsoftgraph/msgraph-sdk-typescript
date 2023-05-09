import {InvitationParticipantInfo} from './invitationParticipantInfo';
import {InviteParticipantsOperation} from './inviteParticipantsOperation';
import {serializeCommsOperation} from './serializeCommsOperation';
import {serializeInvitationParticipantInfo} from './serializeInvitationParticipantInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInviteParticipantsOperation(writer: SerializationWriter, inviteParticipantsOperation: InviteParticipantsOperation | undefined = {} as InviteParticipantsOperation) : void {
        serializeCommsOperation(writer, inviteParticipantsOperation)
        writer.writeCollectionOfObjectValues<InvitationParticipantInfo>("participants", inviteParticipantsOperation.participants, serializeInvitationParticipantInfo);
}
