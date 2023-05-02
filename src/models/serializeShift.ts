import {serializeChangeTrackedEntity} from './serializeChangeTrackedEntity';
import {serializeShiftItem} from './serializeShiftItem';
import {Shift} from './shift';
import {ShiftItem} from './shiftItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShift(writer: SerializationWriter, shift: Shift | undefined = {} as Shift) : void {
        serializeChangeTrackedEntity(writer, shift)
        writer.writeObjectValue<ShiftItem>("draftShift", shift.draftShift, serializeShiftItem);
        writer.writeStringValue("schedulingGroupId", shift.schedulingGroupId);
        writer.writeObjectValue<ShiftItem>("sharedShift", shift.sharedShift, serializeShiftItem);
        writer.writeStringValue("userId", shift.userId);
}
