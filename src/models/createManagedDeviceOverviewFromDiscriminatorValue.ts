import {ManagedDeviceOverviewImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceOverviewImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDeviceOverviewImpl();
}
