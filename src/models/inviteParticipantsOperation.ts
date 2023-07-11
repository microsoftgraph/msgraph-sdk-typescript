import {CommsOperation} from './commsOperation';
import {InvitationParticipantInfo} from './invitationParticipantInfo';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InviteParticipantsOperation extends CommsOperation, Parsable {
    /**
     * The participants to invite.
     */
    participants?: InvitationParticipantInfo[] | undefined;
}
