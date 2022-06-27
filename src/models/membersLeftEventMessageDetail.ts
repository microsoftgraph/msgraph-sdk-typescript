import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MembersLeftEventMessageDetail extends Partial<AdditionalDataHolder>, EventMessageDetail, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Initiator of the event. */
    initiator?: IdentitySet | undefined;
    /** List of members who left the chat. */
    members?: TeamworkUserIdentity[] | undefined;
}
