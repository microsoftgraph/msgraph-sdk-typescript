import { type ManagedAppOperation } from './managedAppOperation';
import { type ManagedAppOperationCollectionResponse } from './managedAppOperationCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeManagedAppOperation } from './serializeManagedAppOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedAppOperationCollectionResponse(writer: SerializationWriter, managedAppOperationCollectionResponse: ManagedAppOperationCollectionResponse | undefined = {} as ManagedAppOperationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAppOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedAppOperation>("value", managedAppOperationCollectionResponse.value, serializeManagedAppOperation);
}
