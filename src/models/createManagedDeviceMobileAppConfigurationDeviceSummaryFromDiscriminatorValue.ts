import {deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary} from './deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary';
import {ManagedDeviceMobileAppConfigurationDeviceSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationDeviceSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary;
}
