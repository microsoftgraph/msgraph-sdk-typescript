import {AvailabilityItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAvailabilityItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : AvailabilityItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AvailabilityItem();
}
