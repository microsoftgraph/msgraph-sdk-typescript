import {Chat} from './chat';
import {ChatCollectionResponse} from './chatCollectionResponse';
import {createChatFromDiscriminatorValue} from './createChatFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeChat} from './serializeChat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatCollectionResponse(chatCollectionResponse: ChatCollectionResponse | undefined = {} as ChatCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(chatCollectionResponse),
        "value": n => { chatCollectionResponse.value = n.getCollectionOfObjectValues<Chat>(createChatFromDiscriminatorValue); },
    }
}
