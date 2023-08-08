import type {EventMessageDetail} from './eventMessageDetail';
import type {IdentitySet} from './identitySet';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ChannelDescriptionUpdatedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * The updated description of the channel.
     */
    channelDescription?: string | undefined;
    /**
     * Unique identifier of the channel.
     */
    channelId?: string | undefined;
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
}
