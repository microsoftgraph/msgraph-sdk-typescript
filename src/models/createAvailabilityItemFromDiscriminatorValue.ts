import { deserializeIntoAvailabilityItem } from './deserializeIntoAvailabilityItem';
import { type AvailabilityItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAvailabilityItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAvailabilityItem;
}
