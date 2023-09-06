import { type ManagedDeviceMobileAppConfigurationUserStatus } from './managedDeviceMobileAppConfigurationUserStatus';
import { type ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse } from './managedDeviceMobileAppConfigurationUserStatusCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeManagedDeviceMobileAppConfigurationUserStatus } from './serializeManagedDeviceMobileAppConfigurationUserStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationUserStatusCollectionResponse(writer: SerializationWriter, managedDeviceMobileAppConfigurationUserStatusCollectionResponse: ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse | undefined = {} as ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedDeviceMobileAppConfigurationUserStatusCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationUserStatus>("value", managedDeviceMobileAppConfigurationUserStatusCollectionResponse.value, serializeManagedDeviceMobileAppConfigurationUserStatus);
}
