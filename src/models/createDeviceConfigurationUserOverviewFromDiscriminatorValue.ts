import {deserializeIntoDeviceConfigurationUserOverview} from './deserializeIntoDeviceConfigurationUserOverview';
import {DeviceConfigurationUserOverview} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationUserOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationUserOverview;
}
