import {ManagedAppOperation} from './managedAppOperation';
import {ManagedAppOperationCollectionResponse} from './managedAppOperationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppOperation} from './serializeManagedAppOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppOperationCollectionResponse(writer: SerializationWriter, managedAppOperationCollectionResponse: ManagedAppOperationCollectionResponse | undefined = {} as ManagedAppOperationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAppOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedAppOperation>("value", managedAppOperationCollectionResponse.value, serializeManagedAppOperation);
}
