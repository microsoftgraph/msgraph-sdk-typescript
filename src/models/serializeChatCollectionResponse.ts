import {Chat} from './chat';
import {ChatCollectionResponse} from './chatCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChat} from './serializeChat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatCollectionResponse(writer: SerializationWriter, chatCollectionResponse: ChatCollectionResponse | undefined = {} as ChatCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, chatCollectionResponse)
        writer.writeCollectionOfObjectValues<Chat>("value", chatCollectionResponse.value, serializeChat);
}
