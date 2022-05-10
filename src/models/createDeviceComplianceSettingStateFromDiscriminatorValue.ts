import {DeviceComplianceSettingStateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceSettingStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceSettingStateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceSettingStateImpl();
}
