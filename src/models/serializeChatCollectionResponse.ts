import {Chat} from './chat';
import {ChatCollectionResponse} from './chatCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChat} from './serializeChat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatCollectionResponse(chatCollectionResponse: ChatCollectionResponse | undefined = {} as ChatCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, chatCollectionResponse)
        writer.writeCollectionOfObjectValues<Chat>("value", chatCollectionResponse.value, serializeChat);
}
