import {ChatMessage} from '../../../../../../models/chatMessage';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeChatMessage} from '../../../../../../models/serializeChatMessage';
import {GetAllMessagesResponse} from './getAllMessagesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAllMessagesResponse(writer: SerializationWriter, getAllMessagesResponse: GetAllMessagesResponse | undefined = {} as GetAllMessagesResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAllMessagesResponse)
        writer.writeCollectionOfObjectValues<ChatMessage>("value", getAllMessagesResponse.value, serializeChatMessage);
}
