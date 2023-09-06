import { createShiftActivityFromDiscriminatorValue } from './createShiftActivityFromDiscriminatorValue';
import { deserializeIntoScheduleEntity } from './deserializeIntoScheduleEntity';
import { serializeShiftActivity } from './serializeShiftActivity';
import { type ShiftActivity } from './shiftActivity';
import { type ShiftItem } from './shiftItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoShiftItem(shiftItem: ShiftItem | undefined = {} as ShiftItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoScheduleEntity(shiftItem),
        "activities": n => { shiftItem.activities = n.getCollectionOfObjectValues<ShiftActivity>(createShiftActivityFromDiscriminatorValue); },
        "displayName": n => { shiftItem.displayName = n.getStringValue(); },
        "notes": n => { shiftItem.notes = n.getStringValue(); },
    }
}
