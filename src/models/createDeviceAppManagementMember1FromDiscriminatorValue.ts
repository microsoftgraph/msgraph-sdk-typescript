import {DeviceAppManagementMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAppManagementMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceAppManagementMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceAppManagementMember1();
}
