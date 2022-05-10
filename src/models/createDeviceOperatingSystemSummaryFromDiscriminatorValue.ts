import {DeviceOperatingSystemSummaryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceOperatingSystemSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceOperatingSystemSummaryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceOperatingSystemSummaryImpl();
}
