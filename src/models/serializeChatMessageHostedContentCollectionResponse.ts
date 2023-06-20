import {ChatMessageHostedContent} from './chatMessageHostedContent';
import {ChatMessageHostedContentCollectionResponse} from './chatMessageHostedContentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChatMessageHostedContent} from './serializeChatMessageHostedContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageHostedContentCollectionResponse(chatMessageHostedContentCollectionResponse: ChatMessageHostedContentCollectionResponse | undefined = {} as ChatMessageHostedContentCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, chatMessageHostedContentCollectionResponse)
        writer.writeCollectionOfObjectValues<ChatMessageHostedContent>("value", chatMessageHostedContentCollectionResponse.value, serializeChatMessageHostedContent);
}
