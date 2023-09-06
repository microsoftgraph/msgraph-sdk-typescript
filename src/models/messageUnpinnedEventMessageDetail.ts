import { type EventMessageDetail } from './eventMessageDetail';
import { type IdentitySet } from './identitySet';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MessageUnpinnedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Date and time when the event occurred.
     */
    eventDateTime?: Date | undefined;
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
}
