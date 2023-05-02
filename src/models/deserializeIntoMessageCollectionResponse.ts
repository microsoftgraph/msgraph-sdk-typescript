import {createMessageFromDiscriminatorValue} from './createMessageFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {Message} from './message';
import {MessageCollectionResponse} from './messageCollectionResponse';
import {serializeMessage} from './serializeMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageCollectionResponse(messageCollectionResponse: MessageCollectionResponse | undefined = {} as MessageCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(messageCollectionResponse),
        "value": n => { messageCollectionResponse.value = n.getCollectionOfObjectValues<Message>(createMessageFromDiscriminatorValue); },
    }
}
