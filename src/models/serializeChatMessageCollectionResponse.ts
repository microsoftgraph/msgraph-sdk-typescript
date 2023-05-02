import {ChatMessage} from './chatMessage';
import {ChatMessageCollectionResponse} from './chatMessageCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChatMessage} from './serializeChatMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageCollectionResponse(writer: SerializationWriter, chatMessageCollectionResponse: ChatMessageCollectionResponse | undefined = {} as ChatMessageCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, chatMessageCollectionResponse)
        writer.writeCollectionOfObjectValues<ChatMessage>("value", chatMessageCollectionResponse.value, serializeChatMessage);
}
