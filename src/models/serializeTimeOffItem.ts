import {serializeScheduleEntity} from './serializeScheduleEntity';
import {TimeOffItem} from './timeOffItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeOffItem(writer: SerializationWriter, timeOffItem: TimeOffItem | undefined = {} as TimeOffItem) : void {
        serializeScheduleEntity(writer, timeOffItem)
        writer.writeStringValue("timeOffReasonId", timeOffItem.timeOffReasonId);
}
