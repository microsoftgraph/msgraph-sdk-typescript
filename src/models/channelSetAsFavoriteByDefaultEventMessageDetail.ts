import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChannelSetAsFavoriteByDefaultEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Unique identifier of the channel.
     */
    channelId?: string | undefined;
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
}
