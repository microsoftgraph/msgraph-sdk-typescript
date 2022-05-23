import {DeviceComplianceUserStatusImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceUserStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceUserStatusImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceUserStatusImpl();
}
