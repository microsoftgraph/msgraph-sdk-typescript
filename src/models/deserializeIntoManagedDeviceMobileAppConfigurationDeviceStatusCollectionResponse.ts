import { createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue } from './createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type ManagedDeviceMobileAppConfigurationDeviceStatus } from './managedDeviceMobileAppConfigurationDeviceStatus';
import { type ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse } from './managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse';
import { serializeManagedDeviceMobileAppConfigurationDeviceStatus } from './serializeManagedDeviceMobileAppConfigurationDeviceStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse(managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse: ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse | undefined = {} as ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse),
        "value": n => { managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse.value = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationDeviceStatus>(createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue); },
    }
}
