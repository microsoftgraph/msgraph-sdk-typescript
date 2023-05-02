import {createShiftItemFromDiscriminatorValue} from './createShiftItemFromDiscriminatorValue';
import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {serializeShiftItem} from './serializeShiftItem';
import {Shift} from './shift';
import {ShiftItem} from './shiftItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoShift(shift: Shift | undefined = {} as Shift) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(shift),
        "draftShift": n => { shift.draftShift = n.getObjectValue<ShiftItem>(createShiftItemFromDiscriminatorValue); },
        "schedulingGroupId": n => { shift.schedulingGroupId = n.getStringValue(); },
        "sharedShift": n => { shift.sharedShift = n.getObjectValue<ShiftItem>(createShiftItemFromDiscriminatorValue); },
        "userId": n => { shift.userId = n.getStringValue(); },
    }
}
