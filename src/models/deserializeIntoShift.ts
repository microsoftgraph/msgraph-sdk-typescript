import { createShiftItemFromDiscriminatorValue } from './createShiftItemFromDiscriminatorValue';
import { deserializeIntoChangeTrackedEntity } from './deserializeIntoChangeTrackedEntity';
import { serializeShiftItem } from './serializeShiftItem';
import { type Shift } from './shift';
import { type ShiftItem } from './shiftItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoShift(shift: Shift | undefined = {} as Shift) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(shift),
        "draftShift": n => { shift.draftShift = n.getObjectValue<ShiftItem>(createShiftItemFromDiscriminatorValue); },
        "schedulingGroupId": n => { shift.schedulingGroupId = n.getStringValue(); },
        "sharedShift": n => { shift.sharedShift = n.getObjectValue<ShiftItem>(createShiftItemFromDiscriminatorValue); },
        "userId": n => { shift.userId = n.getStringValue(); },
    }
}
