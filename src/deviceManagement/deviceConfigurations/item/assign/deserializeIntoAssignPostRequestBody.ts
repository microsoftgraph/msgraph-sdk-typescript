import { createDeviceConfigurationAssignmentFromDiscriminatorValue } from '../../../../models/createDeviceConfigurationAssignmentFromDiscriminatorValue';
import { type DeviceConfigurationAssignment } from '../../../../models/deviceConfigurationAssignment';
import { serializeDeviceConfigurationAssignment } from '../../../../models/serializeDeviceConfigurationAssignment';
import { type AssignPostRequestBody } from './assignPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "assignments": n => { assignPostRequestBody.assignments = n.getCollectionOfObjectValues<DeviceConfigurationAssignment>(createDeviceConfigurationAssignmentFromDiscriminatorValue); },
    }
}
