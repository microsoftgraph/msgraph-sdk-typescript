import { deserializeIntoSetMobileDeviceManagementAuthorityResponse } from './deserializeIntoSetMobileDeviceManagementAuthorityResponse';
import { type SetMobileDeviceManagementAuthorityResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSetMobileDeviceManagementAuthorityResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSetMobileDeviceManagementAuthorityResponse;
}
