import {DeviceConfigurationSettingStateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationSettingStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationSettingStateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationSettingStateImpl();
}
