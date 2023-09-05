import { deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary } from './deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary';
import { type ManagedDeviceMobileAppConfigurationDeviceSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationDeviceSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary;
}
