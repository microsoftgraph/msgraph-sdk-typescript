import { deserializeIntoDeviceConfigurationUserOverview } from './deserializeIntoDeviceConfigurationUserOverview';
import { type DeviceConfigurationUserOverview } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationUserOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationUserOverview;
}
