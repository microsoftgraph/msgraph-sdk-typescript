import {ManagedDeviceMobileAppConfigurationAssignment} from './managedDeviceMobileAppConfigurationAssignment';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceMobileAppConfigurationAssignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDeviceMobileAppConfigurationAssignment();
}
