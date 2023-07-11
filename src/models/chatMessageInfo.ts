import {ChatMessageFromIdentitySet} from './chatMessageFromIdentitySet';
import {ChatMessageType} from './chatMessageType';
import {Entity} from './entity';
import {EventMessageDetail} from './eventMessageDetail';
import {ItemBody} from './itemBody';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageInfo extends Entity, Parsable {
    /**
     * Body of the chatMessage. This will still contain markers for @mentions and attachments even though the object does not return @mentions and attachments.
     */
    body?: ItemBody | undefined;
    /**
     * Date time object representing the time at which message was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * Read-only.  If present, represents details of an event that happened in a chat, a channel, or a team, for example, members were added, and so on. For event messages, the messageType property will be set to systemEventMessage.
     */
    eventDetail?: EventMessageDetail | undefined;
    /**
     * Information about the sender of the message.
     */
    from?: ChatMessageFromIdentitySet | undefined;
    /**
     * If set to true, the original message has been deleted.
     */
    isDeleted?: boolean | undefined;
    /**
     * The messageType property
     */
    messageType?: ChatMessageType | undefined;
}
