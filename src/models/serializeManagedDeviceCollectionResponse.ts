import {ManagedDevice} from './managedDevice';
import {ManagedDeviceCollectionResponse} from './managedDeviceCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedDevice} from './serializeManagedDevice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceCollectionResponse(writer: SerializationWriter, managedDeviceCollectionResponse: ManagedDeviceCollectionResponse | undefined = {} as ManagedDeviceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedDeviceCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedDevice>("value", managedDeviceCollectionResponse.value, serializeManagedDevice);
}
