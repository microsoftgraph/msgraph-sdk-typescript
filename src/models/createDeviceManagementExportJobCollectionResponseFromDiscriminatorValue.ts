import { deserializeIntoDeviceManagementExportJobCollectionResponse } from './deserializeIntoDeviceManagementExportJobCollectionResponse';
import { type DeviceManagementExportJobCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceManagementExportJobCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagementExportJobCollectionResponse;
}
