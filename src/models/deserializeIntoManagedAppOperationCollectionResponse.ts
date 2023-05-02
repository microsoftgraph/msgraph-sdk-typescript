import {createManagedAppOperationFromDiscriminatorValue} from './createManagedAppOperationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ManagedAppOperation} from './managedAppOperation';
import {ManagedAppOperationCollectionResponse} from './managedAppOperationCollectionResponse';
import {serializeManagedAppOperation} from './serializeManagedAppOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppOperationCollectionResponse(managedAppOperationCollectionResponse: ManagedAppOperationCollectionResponse | undefined = {} as ManagedAppOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAppOperationCollectionResponse),
        "value": n => { managedAppOperationCollectionResponse.value = n.getCollectionOfObjectValues<ManagedAppOperation>(createManagedAppOperationFromDiscriminatorValue); },
    }
}
