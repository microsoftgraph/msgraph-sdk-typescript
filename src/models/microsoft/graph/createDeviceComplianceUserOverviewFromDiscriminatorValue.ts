import {DeviceComplianceUserOverview} from './deviceComplianceUserOverview';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceUserOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceUserOverview {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceUserOverview();
}
