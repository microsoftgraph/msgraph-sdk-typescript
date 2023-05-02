import {deserializeIntoManagedDeviceMobileAppConfigurationUserSummary} from './deserializeIntoManagedDeviceMobileAppConfigurationUserSummary';
import {ManagedDeviceMobileAppConfigurationUserSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationUserSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDeviceMobileAppConfigurationUserSummary;
}
