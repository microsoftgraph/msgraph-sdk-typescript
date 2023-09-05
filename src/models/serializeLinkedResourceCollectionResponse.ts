import { type LinkedResource } from './linkedResource';
import { type LinkedResourceCollectionResponse } from './linkedResourceCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeLinkedResource } from './serializeLinkedResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLinkedResourceCollectionResponse(writer: SerializationWriter, linkedResourceCollectionResponse: LinkedResourceCollectionResponse | undefined = {} as LinkedResourceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, linkedResourceCollectionResponse)
        writer.writeCollectionOfObjectValues<LinkedResource>("value", linkedResourceCollectionResponse.value, serializeLinkedResource);
}
