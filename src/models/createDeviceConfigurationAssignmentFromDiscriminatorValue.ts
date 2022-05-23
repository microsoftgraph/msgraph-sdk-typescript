import {DeviceConfigurationAssignmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationAssignmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationAssignmentImpl();
}
