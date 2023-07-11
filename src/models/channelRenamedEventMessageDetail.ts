import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChannelRenamedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * The updated name of the channel.
     */
    channelDisplayName?: string | undefined;
    /**
     * Unique identifier of the channel.
     */
    channelId?: string | undefined;
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
}
