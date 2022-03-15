import {ManagedDeviceMobileAppConfigurationUserSummary} from './managedDeviceMobileAppConfigurationUserSummary';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationUserSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceMobileAppConfigurationUserSummary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDeviceMobileAppConfigurationUserSummary();
}
