import {ManagedDeviceMobileAppConfigurationAssignment} from '../../../../models/managedDeviceMobileAppConfigurationAssignment';
import {serializeManagedDeviceMobileAppConfigurationAssignment} from '../../../../models/serializeManagedDeviceMobileAppConfigurationAssignment';
import {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(writer: SerializationWriter, assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationAssignment>("assignments", assignPostRequestBody.assignments, serializeManagedDeviceMobileAppConfigurationAssignment);
        writer.writeAdditionalData(assignPostRequestBody.additionalData);
}
