import { type GroupAssignmentTarget } from './groupAssignmentTarget';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGroupAssignmentTarget(writer: SerializationWriter, groupAssignmentTarget: GroupAssignmentTarget | undefined = {} as GroupAssignmentTarget) : void {
        serializeDeviceAndAppManagementAssignmentTarget(writer, groupAssignmentTarget)
        writer.writeStringValue("groupId", groupAssignmentTarget.groupId);
}
