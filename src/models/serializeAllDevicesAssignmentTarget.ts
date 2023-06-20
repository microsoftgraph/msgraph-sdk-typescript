import {AllDevicesAssignmentTarget} from './allDevicesAssignmentTarget';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAllDevicesAssignmentTarget(allDevicesAssignmentTarget: AllDevicesAssignmentTarget | undefined = {} as AllDevicesAssignmentTarget, writer: SerializationWriter) : void {
        serializeDeviceAndAppManagementAssignmentTarget(writer, allDevicesAssignmentTarget)
}
