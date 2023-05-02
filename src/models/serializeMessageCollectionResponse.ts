import {Message} from './message';
import {MessageCollectionResponse} from './messageCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMessage} from './serializeMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessageCollectionResponse(writer: SerializationWriter, messageCollectionResponse: MessageCollectionResponse | undefined = {} as MessageCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, messageCollectionResponse)
        writer.writeCollectionOfObjectValues<Message>("value", messageCollectionResponse.value, serializeMessage);
}
