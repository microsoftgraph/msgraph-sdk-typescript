import {StaffAvailabilityItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStaffAvailabilityItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : StaffAvailabilityItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StaffAvailabilityItem();
}
