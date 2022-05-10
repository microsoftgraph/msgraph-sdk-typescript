import {DeviceConfigurationDeviceOverviewImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationDeviceOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationDeviceOverviewImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationDeviceOverviewImpl();
}
