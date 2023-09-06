import { createManagedDeviceFromDiscriminatorValue } from './createManagedDeviceFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type ManagedDevice } from './managedDevice';
import { type ManagedDeviceCollectionResponse } from './managedDeviceCollectionResponse';
import { serializeManagedDevice } from './serializeManagedDevice';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceCollectionResponse(managedDeviceCollectionResponse: ManagedDeviceCollectionResponse | undefined = {} as ManagedDeviceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedDeviceCollectionResponse),
        "value": n => { managedDeviceCollectionResponse.value = n.getCollectionOfObjectValues<ManagedDevice>(createManagedDeviceFromDiscriminatorValue); },
    }
}
