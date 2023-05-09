import {deserializeIntoDeviceComplianceSettingState} from './deserializeIntoDeviceComplianceSettingState';
import {DeviceComplianceSettingState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceSettingStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceComplianceSettingState;
}
