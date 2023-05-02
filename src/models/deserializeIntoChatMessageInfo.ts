import {ChatMessageFromIdentitySet} from './chatMessageFromIdentitySet';
import {ChatMessageInfo} from './chatMessageInfo';
import {ChatMessageType} from './chatMessageType';
import {createChatMessageFromIdentitySetFromDiscriminatorValue} from './createChatMessageFromIdentitySetFromDiscriminatorValue';
import {createEventMessageDetailFromDiscriminatorValue} from './createEventMessageDetailFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EventMessageDetail} from './eventMessageDetail';
import {ItemBody} from './itemBody';
import {serializeChatMessageFromIdentitySet} from './serializeChatMessageFromIdentitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeItemBody} from './serializeItemBody';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageInfo(chatMessageInfo: ChatMessageInfo | undefined = {} as ChatMessageInfo) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(chatMessageInfo),
        "body": n => { chatMessageInfo.body = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
        "createdDateTime": n => { chatMessageInfo.createdDateTime = n.getDateValue(); },
        "eventDetail": n => { chatMessageInfo.eventDetail = n.getObjectValue<EventMessageDetail>(createEventMessageDetailFromDiscriminatorValue); },
        "from": n => { chatMessageInfo.from = n.getObjectValue<ChatMessageFromIdentitySet>(createChatMessageFromIdentitySetFromDiscriminatorValue); },
        "isDeleted": n => { chatMessageInfo.isDeleted = n.getBooleanValue(); },
        "messageType": n => { chatMessageInfo.messageType = n.getEnumValue<ChatMessageType>(ChatMessageType); },
    }
}
