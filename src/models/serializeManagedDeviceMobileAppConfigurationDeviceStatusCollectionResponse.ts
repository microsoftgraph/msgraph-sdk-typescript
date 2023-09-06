import { type ManagedDeviceMobileAppConfigurationDeviceStatus } from './managedDeviceMobileAppConfigurationDeviceStatus';
import { type ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse } from './managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeManagedDeviceMobileAppConfigurationDeviceStatus } from './serializeManagedDeviceMobileAppConfigurationDeviceStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse(writer: SerializationWriter, managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse: ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse | undefined = {} as ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationDeviceStatus>("value", managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse.value, serializeManagedDeviceMobileAppConfigurationDeviceStatus);
}
