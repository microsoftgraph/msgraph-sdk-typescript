import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

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
