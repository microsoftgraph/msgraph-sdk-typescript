import { deserializeIntoManagedDeviceMobileAppConfigurationAssignment } from './deserializeIntoManagedDeviceMobileAppConfigurationAssignment';
import { type ManagedDeviceMobileAppConfigurationAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDeviceMobileAppConfigurationAssignment;
}
