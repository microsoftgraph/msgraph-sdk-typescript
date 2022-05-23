import {ManagedDeviceMobileAppConfigurationDeviceSummaryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationDeviceSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceMobileAppConfigurationDeviceSummaryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDeviceMobileAppConfigurationDeviceSummaryImpl();
}
