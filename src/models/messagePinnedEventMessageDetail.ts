import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MessagePinnedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Date and time when the event occurred.
     */
    eventDateTime?: Date | undefined;
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
}
