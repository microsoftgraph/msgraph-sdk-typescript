import {deserializeIntoDeviceManagementExportJobCollectionResponse} from './deserializeIntoDeviceManagementExportJobCollectionResponse';
import {DeviceManagementExportJobCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementExportJobCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagementExportJobCollectionResponse;
}
