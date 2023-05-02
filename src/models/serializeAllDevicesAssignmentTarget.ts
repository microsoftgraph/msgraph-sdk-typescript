import {AllDevicesAssignmentTarget} from './allDevicesAssignmentTarget';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAllDevicesAssignmentTarget(writer: SerializationWriter, allDevicesAssignmentTarget: AllDevicesAssignmentTarget | undefined = {} as AllDevicesAssignmentTarget) : void {
        serializeDeviceAndAppManagementAssignmentTarget(writer, allDevicesAssignmentTarget)
}
