import { deserializeIntoManagedDeviceMobileAppConfigurationUserStatus } from './deserializeIntoManagedDeviceMobileAppConfigurationUserStatus';
import { type ManagedDeviceMobileAppConfigurationUserStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDeviceMobileAppConfigurationUserStatus;
}
