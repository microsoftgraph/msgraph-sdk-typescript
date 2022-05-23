import {SetMobileDeviceManagementAuthorityResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetMobileDeviceManagementAuthorityResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetMobileDeviceManagementAuthorityResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetMobileDeviceManagementAuthorityResponseImpl();
}
