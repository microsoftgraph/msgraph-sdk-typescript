import type {ManagedDevice} from './managedDevice';
import type {ManagedDeviceCollectionResponse} from './managedDeviceCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedDevice} from './serializeManagedDevice';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceCollectionResponse(writer: SerializationWriter, managedDeviceCollectionResponse: ManagedDeviceCollectionResponse | undefined = {} as ManagedDeviceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedDeviceCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedDevice>("value", managedDeviceCollectionResponse.value, serializeManagedDevice);
}
