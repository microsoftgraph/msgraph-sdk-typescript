import {serializeScheduleEntity} from './serializeScheduleEntity';
import {serializeShiftActivity} from './serializeShiftActivity';
import {ShiftActivity} from './shiftActivity';
import {ShiftItem} from './shiftItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShiftItem(writer: SerializationWriter, shiftItem: ShiftItem | undefined = {} as ShiftItem) : void {
        serializeScheduleEntity(writer, shiftItem)
        writer.writeCollectionOfObjectValues<ShiftActivity>("activities", shiftItem.activities, serializeShiftActivity);
        writer.writeStringValue("displayName", shiftItem.displayName);
        writer.writeStringValue("notes", shiftItem.notes);
}
