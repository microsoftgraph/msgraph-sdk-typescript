import {ManagedDeviceMobileAppConfigurationDeviceSummary} from './managedDeviceMobileAppConfigurationDeviceSummary';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationDeviceSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceMobileAppConfigurationDeviceSummary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDeviceMobileAppConfigurationDeviceSummary();
}
