import { createManagedAppOperationFromDiscriminatorValue } from './createManagedAppOperationFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type ManagedAppOperation } from './managedAppOperation';
import { type ManagedAppOperationCollectionResponse } from './managedAppOperationCollectionResponse';
import { serializeManagedAppOperation } from './serializeManagedAppOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppOperationCollectionResponse(managedAppOperationCollectionResponse: ManagedAppOperationCollectionResponse | undefined = {} as ManagedAppOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAppOperationCollectionResponse),
        "value": n => { managedAppOperationCollectionResponse.value = n.getCollectionOfObjectValues<ManagedAppOperation>(createManagedAppOperationFromDiscriminatorValue); },
    }
}
