import { type ManagedDeviceMobileAppConfigurationAssignment } from '../../../../models/managedDeviceMobileAppConfigurationAssignment';
import { serializeManagedDeviceMobileAppConfigurationAssignment } from '../../../../models/serializeManagedDeviceMobileAppConfigurationAssignment';
import { type AssignPostRequestBody } from './assignPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(writer: SerializationWriter, assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationAssignment>("assignments", assignPostRequestBody.assignments, serializeManagedDeviceMobileAppConfigurationAssignment);
        writer.writeAdditionalData(assignPostRequestBody.additionalData);
}
