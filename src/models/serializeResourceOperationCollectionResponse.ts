import {ResourceOperation} from './resourceOperation';
import {ResourceOperationCollectionResponse} from './resourceOperationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeResourceOperation} from './serializeResourceOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceOperationCollectionResponse(writer: SerializationWriter, resourceOperationCollectionResponse: ResourceOperationCollectionResponse | undefined = {} as ResourceOperationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, resourceOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<ResourceOperation>("value", resourceOperationCollectionResponse.value, serializeResourceOperation);
}
