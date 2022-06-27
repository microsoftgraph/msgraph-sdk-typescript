import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MembersAddedEventMessageDetail extends Partial<AdditionalDataHolder>, EventMessageDetail, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Initiator of the event. */
    initiator?: IdentitySet | undefined;
    /** List of members added. */
    members?: TeamworkUserIdentity[] | undefined;
    /** The timestamp denoting how far back a conversation's history is shared with the conversation members. */
    visibleHistoryStartDateTime?: Date | undefined;
}
