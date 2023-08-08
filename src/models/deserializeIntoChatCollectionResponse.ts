import type {Chat} from './chat';
import type {ChatCollectionResponse} from './chatCollectionResponse';
import {createChatFromDiscriminatorValue} from './createChatFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeChat} from './serializeChat';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatCollectionResponse(chatCollectionResponse: ChatCollectionResponse | undefined = {} as ChatCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(chatCollectionResponse),
        "value": n => { chatCollectionResponse.value = n.getCollectionOfObjectValues<Chat>(createChatFromDiscriminatorValue); },
    }
}
