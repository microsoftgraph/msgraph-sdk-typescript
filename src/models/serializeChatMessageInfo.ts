import { type ChatMessageFromIdentitySet } from './chatMessageFromIdentitySet';
import { type ChatMessageInfo } from './chatMessageInfo';
import { ChatMessageType } from './chatMessageType';
import { type EventMessageDetail } from './eventMessageDetail';
import { type ItemBody } from './itemBody';
import { serializeChatMessageFromIdentitySet } from './serializeChatMessageFromIdentitySet';
import { serializeEntity } from './serializeEntity';
import { serializeEventMessageDetail } from './serializeEventMessageDetail';
import { serializeItemBody } from './serializeItemBody';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChatMessageInfo(writer: SerializationWriter, chatMessageInfo: ChatMessageInfo | undefined = {} as ChatMessageInfo) : void {
        serializeEntity(writer, chatMessageInfo)
        writer.writeObjectValue<ItemBody>("body", chatMessageInfo.body, serializeItemBody);
        writer.writeDateValue("createdDateTime", chatMessageInfo.createdDateTime);
        writer.writeObjectValue<EventMessageDetail>("eventDetail", chatMessageInfo.eventDetail, serializeEventMessageDetail);
        writer.writeObjectValue<ChatMessageFromIdentitySet>("from", chatMessageInfo.from, serializeChatMessageFromIdentitySet);
        writer.writeBooleanValue("isDeleted", chatMessageInfo.isDeleted);
        writer.writeEnumValue<ChatMessageType>("messageType", chatMessageInfo.messageType);
}
