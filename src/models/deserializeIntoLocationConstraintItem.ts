import { deserializeIntoLocation } from './deserializeIntoLocation';
import { type LocationConstraintItem } from './locationConstraintItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLocationConstraintItem(locationConstraintItem: LocationConstraintItem | undefined = {} as LocationConstraintItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoLocation(locationConstraintItem),
        "resolveAvailability": n => { locationConstraintItem.resolveAvailability = n.getBooleanValue(); },
    }
}
