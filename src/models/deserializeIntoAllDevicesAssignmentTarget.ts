import {AllDevicesAssignmentTarget} from './allDevicesAssignmentTarget';
import {deserializeIntoDeviceAndAppManagementAssignmentTarget} from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAllDevicesAssignmentTarget(allDevicesAssignmentTarget: AllDevicesAssignmentTarget | undefined = {} as AllDevicesAssignmentTarget) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceAndAppManagementAssignmentTarget(allDevicesAssignmentTarget),
    }
}
