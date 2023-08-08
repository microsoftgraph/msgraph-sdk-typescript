import type {ResourceOperation} from './resourceOperation';
import type {ResourceOperationCollectionResponse} from './resourceOperationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeResourceOperation} from './serializeResourceOperation';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceOperationCollectionResponse(writer: SerializationWriter, resourceOperationCollectionResponse: ResourceOperationCollectionResponse | undefined = {} as ResourceOperationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, resourceOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<ResourceOperation>("value", resourceOperationCollectionResponse.value, serializeResourceOperation);
}
