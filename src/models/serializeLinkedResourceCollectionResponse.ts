import type {LinkedResource} from './linkedResource';
import type {LinkedResourceCollectionResponse} from './linkedResourceCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLinkedResource} from './serializeLinkedResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLinkedResourceCollectionResponse(writer: SerializationWriter, linkedResourceCollectionResponse: LinkedResourceCollectionResponse | undefined = {} as LinkedResourceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, linkedResourceCollectionResponse)
        writer.writeCollectionOfObjectValues<LinkedResource>("value", linkedResourceCollectionResponse.value, serializeLinkedResource);
}
