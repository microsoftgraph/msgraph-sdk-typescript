import {createResourceOperationFromDiscriminatorValue} from './createResourceOperationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ResourceOperation} from './resourceOperation';
import {ResourceOperationCollectionResponse} from './resourceOperationCollectionResponse';
import {serializeResourceOperation} from './serializeResourceOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceOperationCollectionResponse(resourceOperationCollectionResponse: ResourceOperationCollectionResponse | undefined = {} as ResourceOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(resourceOperationCollectionResponse),
        "value": n => { resourceOperationCollectionResponse.value = n.getCollectionOfObjectValues<ResourceOperation>(createResourceOperationFromDiscriminatorValue); },
    }
}
