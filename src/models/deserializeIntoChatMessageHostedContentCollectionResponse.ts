import {ChatMessageHostedContent} from './chatMessageHostedContent';
import {ChatMessageHostedContentCollectionResponse} from './chatMessageHostedContentCollectionResponse';
import {createChatMessageHostedContentFromDiscriminatorValue} from './createChatMessageHostedContentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeChatMessageHostedContent} from './serializeChatMessageHostedContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageHostedContentCollectionResponse(chatMessageHostedContentCollectionResponse: ChatMessageHostedContentCollectionResponse | undefined = {} as ChatMessageHostedContentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(chatMessageHostedContentCollectionResponse),
        "value": n => { chatMessageHostedContentCollectionResponse.value = n.getCollectionOfObjectValues<ChatMessageHostedContent>(createChatMessageHostedContentFromDiscriminatorValue); },
    }
}
