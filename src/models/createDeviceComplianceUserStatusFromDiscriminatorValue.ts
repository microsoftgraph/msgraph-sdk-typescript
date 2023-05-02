import {deserializeIntoDeviceComplianceUserStatus} from './deserializeIntoDeviceComplianceUserStatus';
import {DeviceComplianceUserStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceUserStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceComplianceUserStatus;
}
