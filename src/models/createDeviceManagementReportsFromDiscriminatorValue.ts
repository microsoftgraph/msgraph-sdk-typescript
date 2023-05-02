import {deserializeIntoDeviceManagementReports} from './deserializeIntoDeviceManagementReports';
import {DeviceManagementReports} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementReportsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagementReports;
}
