import { deserializeIntoDeviceAndAppManagementAssignmentTarget } from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import { type GroupAssignmentTarget } from './groupAssignmentTarget';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupAssignmentTarget(groupAssignmentTarget: GroupAssignmentTarget | undefined = {} as GroupAssignmentTarget) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceAndAppManagementAssignmentTarget(groupAssignmentTarget),
        "groupId": n => { groupAssignmentTarget.groupId = n.getStringValue(); },
    }
}
