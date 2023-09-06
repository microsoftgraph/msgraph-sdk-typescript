import { type ManagedDeviceMobileAppConfigurationAssignment } from './managedDeviceMobileAppConfigurationAssignment';
import { type ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse } from './managedDeviceMobileAppConfigurationAssignmentCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeManagedDeviceMobileAppConfigurationAssignment } from './serializeManagedDeviceMobileAppConfigurationAssignment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationAssignmentCollectionResponse(writer: SerializationWriter, managedDeviceMobileAppConfigurationAssignmentCollectionResponse: ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse | undefined = {} as ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedDeviceMobileAppConfigurationAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationAssignment>("value", managedDeviceMobileAppConfigurationAssignmentCollectionResponse.value, serializeManagedDeviceMobileAppConfigurationAssignment);
}
