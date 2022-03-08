import {ManagedDeviceOverview} from './managedDeviceOverview';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceOverview {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDeviceOverview();
}
