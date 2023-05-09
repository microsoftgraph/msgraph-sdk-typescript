import {deserializeIntoDeviceExchangeAccessStateSummary} from './deserializeIntoDeviceExchangeAccessStateSummary';
import {DeviceExchangeAccessStateSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceExchangeAccessStateSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceExchangeAccessStateSummary;
}
