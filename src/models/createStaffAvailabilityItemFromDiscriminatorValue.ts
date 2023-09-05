import { deserializeIntoStaffAvailabilityItem } from './deserializeIntoStaffAvailabilityItem';
import { type StaffAvailabilityItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createStaffAvailabilityItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStaffAvailabilityItem;
}
