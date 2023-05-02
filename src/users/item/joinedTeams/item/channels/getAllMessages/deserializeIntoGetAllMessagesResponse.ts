import {ChatMessage} from '../../../../../../models/chatMessage';
import {createChatMessageFromDiscriminatorValue} from '../../../../../../models/createChatMessageFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeChatMessage} from '../../../../../../models/serializeChatMessage';
import {GetAllMessagesResponse} from './getAllMessagesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAllMessagesResponse(getAllMessagesResponse: GetAllMessagesResponse | undefined = {} as GetAllMessagesResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getAllMessagesResponse),
        "value": n => { getAllMessagesResponse.value = n.getCollectionOfObjectValues<ChatMessage>(createChatMessageFromDiscriminatorValue); },
    }
}
