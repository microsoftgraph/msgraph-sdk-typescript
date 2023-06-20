import {LinkedResource} from './linkedResource';
import {LinkedResourceCollectionResponse} from './linkedResourceCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLinkedResource} from './serializeLinkedResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLinkedResourceCollectionResponse(linkedResourceCollectionResponse: LinkedResourceCollectionResponse | undefined = {} as LinkedResourceCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, linkedResourceCollectionResponse)
        writer.writeCollectionOfObjectValues<LinkedResource>("value", linkedResourceCollectionResponse.value, serializeLinkedResource);
}
