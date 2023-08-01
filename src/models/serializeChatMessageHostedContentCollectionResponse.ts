import type {ChatMessageHostedContent} from './chatMessageHostedContent';
import type {ChatMessageHostedContentCollectionResponse} from './chatMessageHostedContentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChatMessageHostedContent} from './serializeChatMessageHostedContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageHostedContentCollectionResponse(writer: SerializationWriter, chatMessageHostedContentCollectionResponse: ChatMessageHostedContentCollectionResponse | undefined = {} as ChatMessageHostedContentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, chatMessageHostedContentCollectionResponse)
        writer.writeCollectionOfObjectValues<ChatMessageHostedContent>("value", chatMessageHostedContentCollectionResponse.value, serializeChatMessageHostedContent);
}
