import { deserializeIntoManagedDeviceOverview } from './deserializeIntoManagedDeviceOverview';
import { type ManagedDeviceOverview } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedDeviceOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDeviceOverview;
}
