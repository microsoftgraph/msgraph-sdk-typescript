import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatRenamedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * The updated name of the chat.
     */
    chatDisplayName?: string | undefined;
    /**
     * Unique identifier of the chat.
     */
    chatId?: string | undefined;
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
}
