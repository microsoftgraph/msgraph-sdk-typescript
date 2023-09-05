import { deserializeIntoDeviceConfigurationDeviceStateSummary } from './deserializeIntoDeviceConfigurationDeviceStateSummary';
import { type DeviceConfigurationDeviceStateSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationDeviceStateSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationDeviceStateSummary;
}
