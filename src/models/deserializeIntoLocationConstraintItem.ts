import {deserializeIntoLocation} from './deserializeIntoLocation';
import {LocationConstraintItem} from './locationConstraintItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocationConstraintItem(locationConstraintItem: LocationConstraintItem | undefined = {} as LocationConstraintItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoLocation(locationConstraintItem),
        "resolveAvailability": n => { locationConstraintItem.resolveAvailability = n.getBooleanValue(); },
    }
}
