import {CommsOperation} from './commsOperation';
import {InvitationParticipantInfo} from './invitationParticipantInfo';

export interface InviteParticipantsOperation extends CommsOperation{
    /** The participants to invite. */
    participants?:InvitationParticipantInfo[] | undefined;
}
