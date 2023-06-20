import {GroupAssignmentTarget} from './groupAssignmentTarget';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupAssignmentTarget(groupAssignmentTarget: GroupAssignmentTarget | undefined = {} as GroupAssignmentTarget, writer: SerializationWriter) : void {
        serializeDeviceAndAppManagementAssignmentTarget(writer, groupAssignmentTarget)
        writer.writeStringValue("groupId", groupAssignmentTarget.groupId);
}
