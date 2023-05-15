import {deserializeIntoAvailabilityItem} from './deserializeIntoAvailabilityItem';
import {AvailabilityItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAvailabilityItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAvailabilityItem;
}
