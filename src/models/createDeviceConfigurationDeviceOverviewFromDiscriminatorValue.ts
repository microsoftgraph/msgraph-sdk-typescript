import { deserializeIntoDeviceConfigurationDeviceOverview } from './deserializeIntoDeviceConfigurationDeviceOverview';
import { type DeviceConfigurationDeviceOverview } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationDeviceOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationDeviceOverview;
}
