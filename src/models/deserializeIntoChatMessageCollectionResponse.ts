import {ChatMessage} from './chatMessage';
import {ChatMessageCollectionResponse} from './chatMessageCollectionResponse';
import {createChatMessageFromDiscriminatorValue} from './createChatMessageFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeChatMessage} from './serializeChatMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageCollectionResponse(chatMessageCollectionResponse: ChatMessageCollectionResponse | undefined = {} as ChatMessageCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(chatMessageCollectionResponse),
        "value": n => { chatMessageCollectionResponse.value = n.getCollectionOfObjectValues<ChatMessage>(createChatMessageFromDiscriminatorValue); },
    }
}
