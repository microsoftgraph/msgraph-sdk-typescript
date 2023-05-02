import {deserializeIntoDeviceConfigurationAssignment} from './deserializeIntoDeviceConfigurationAssignment';
import {DeviceConfigurationAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationAssignment;
}
