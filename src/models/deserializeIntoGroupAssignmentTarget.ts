import {deserializeIntoDeviceAndAppManagementAssignmentTarget} from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import {GroupAssignmentTarget} from './groupAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupAssignmentTarget(groupAssignmentTarget: GroupAssignmentTarget | undefined = {} as GroupAssignmentTarget) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceAndAppManagementAssignmentTarget(groupAssignmentTarget),
        "groupId": n => { groupAssignmentTarget.groupId = n.getStringValue(); },
    }
}
