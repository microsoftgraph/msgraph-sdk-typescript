import {DeviceManagementExportJobImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementExportJobFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementExportJobImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementExportJobImpl();
}
