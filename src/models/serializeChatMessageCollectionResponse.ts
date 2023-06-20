import {ChatMessage} from './chatMessage';
import {ChatMessageCollectionResponse} from './chatMessageCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChatMessage} from './serializeChatMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageCollectionResponse(chatMessageCollectionResponse: ChatMessageCollectionResponse | undefined = {} as ChatMessageCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, chatMessageCollectionResponse)
        writer.writeCollectionOfObjectValues<ChatMessage>("value", chatMessageCollectionResponse.value, serializeChatMessage);
}
