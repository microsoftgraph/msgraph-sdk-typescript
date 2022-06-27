import {Call} from './call';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ParticipantLeftNotification extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The call property */
    call?: Call | undefined;
    /** ID of the participant under the policy who has left the meeting. */
    participantId?: string | undefined;
}
