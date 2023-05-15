import {deserializeIntoDeviceConfigurationDeviceStateSummary} from './deserializeIntoDeviceConfigurationDeviceStateSummary';
import {DeviceConfigurationDeviceStateSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationDeviceStateSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationDeviceStateSummary;
}
