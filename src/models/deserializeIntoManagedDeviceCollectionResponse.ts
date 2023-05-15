import {createManagedDeviceFromDiscriminatorValue} from './createManagedDeviceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ManagedDevice} from './managedDevice';
import {ManagedDeviceCollectionResponse} from './managedDeviceCollectionResponse';
import {serializeManagedDevice} from './serializeManagedDevice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceCollectionResponse(managedDeviceCollectionResponse: ManagedDeviceCollectionResponse | undefined = {} as ManagedDeviceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedDeviceCollectionResponse),
        "value": n => { managedDeviceCollectionResponse.value = n.getCollectionOfObjectValues<ManagedDevice>(createManagedDeviceFromDiscriminatorValue); },
    }
}
