import {deserializeIntoManagedDeviceOverview} from './deserializeIntoManagedDeviceOverview';
import {ManagedDeviceOverview} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDeviceOverview;
}
