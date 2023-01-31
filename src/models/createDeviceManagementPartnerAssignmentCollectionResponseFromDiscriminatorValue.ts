import {DeviceManagementPartnerAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementPartnerAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementPartnerAssignmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementPartnerAssignmentCollectionResponse();
}
