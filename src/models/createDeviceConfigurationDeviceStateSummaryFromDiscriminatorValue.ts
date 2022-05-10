import {DeviceConfigurationDeviceStateSummaryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationDeviceStateSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationDeviceStateSummaryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationDeviceStateSummaryImpl();
}
