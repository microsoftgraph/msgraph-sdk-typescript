import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChannelRenamedEventMessageDetail extends Partial<AdditionalDataHolder>, EventMessageDetail, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The updated name of the channel. */
    channelDisplayName?: string | undefined;
    /** Unique identifier of the channel. */
    channelId?: string | undefined;
    /** Initiator of the event. */
    initiator?: IdentitySet | undefined;
}
