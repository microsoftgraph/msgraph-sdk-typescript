import { deserializeIntoDeviceManagementExportJob } from './deserializeIntoDeviceManagementExportJob';
import { type DeviceManagementExportJob } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceManagementExportJobFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagementExportJob;
}
