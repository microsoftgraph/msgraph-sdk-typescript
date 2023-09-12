import { deserializeIntoDeviceExchangeAccessStateSummary } from './deserializeIntoDeviceExchangeAccessStateSummary';
import { type DeviceExchangeAccessStateSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceExchangeAccessStateSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceExchangeAccessStateSummary;
}
