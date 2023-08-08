import type {Call} from './call';
import type {Entity} from './entity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ParticipantJoiningNotification extends Entity, Parsable {
    /**
     * The call property
     */
    call?: Call | undefined;
}
