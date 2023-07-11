import {Call} from './call';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ParticipantLeftNotification extends Entity, Parsable {
    /**
     * The call property
     */
    call?: Call | undefined;
    /**
     * ID of the participant under the policy who has left the meeting.
     */
    participantId?: string | undefined;
}
