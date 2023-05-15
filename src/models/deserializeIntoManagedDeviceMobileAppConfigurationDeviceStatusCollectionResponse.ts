import {createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ManagedDeviceMobileAppConfigurationDeviceStatus} from './managedDeviceMobileAppConfigurationDeviceStatus';
import {ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse} from './managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse';
import {serializeManagedDeviceMobileAppConfigurationDeviceStatus} from './serializeManagedDeviceMobileAppConfigurationDeviceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse(managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse: ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse | undefined = {} as ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse),
        "value": n => { managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse.value = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationDeviceStatus>(createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue); },
    }
}
