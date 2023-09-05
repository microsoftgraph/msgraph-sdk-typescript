import { createMessageFromDiscriminatorValue } from './createMessageFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type Message } from './message';
import { type MessageCollectionResponse } from './messageCollectionResponse';
import { serializeMessage } from './serializeMessage';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageCollectionResponse(messageCollectionResponse: MessageCollectionResponse | undefined = {} as MessageCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(messageCollectionResponse),
        "value": n => { messageCollectionResponse.value = n.getCollectionOfObjectValues<Message>(createMessageFromDiscriminatorValue); },
    }
}
