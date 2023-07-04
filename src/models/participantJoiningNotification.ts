import {Call} from './call';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ParticipantJoiningNotification extends Entity, Parsable {
    /**
     * The call property
     */
    call?: Call | undefined;
}
