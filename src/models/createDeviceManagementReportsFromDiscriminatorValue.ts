import { deserializeIntoDeviceManagementReports } from './deserializeIntoDeviceManagementReports';
import { type DeviceManagementReports } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceManagementReportsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagementReports;
}
