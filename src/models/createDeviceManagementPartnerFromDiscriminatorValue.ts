import {DeviceManagementPartnerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementPartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementPartnerImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementPartnerImpl();
}
