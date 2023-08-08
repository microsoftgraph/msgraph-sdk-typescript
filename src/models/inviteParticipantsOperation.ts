import type {CommsOperation} from './commsOperation';
import type {InvitationParticipantInfo} from './invitationParticipantInfo';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface InviteParticipantsOperation extends CommsOperation, Parsable {
    /**
     * The participants to invite.
     */
    participants?: InvitationParticipantInfo[] | undefined;
}
