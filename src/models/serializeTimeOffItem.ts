import { serializeScheduleEntity } from './serializeScheduleEntity';
import { type TimeOffItem } from './timeOffItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTimeOffItem(writer: SerializationWriter, timeOffItem: TimeOffItem | undefined = {} as TimeOffItem) : void {
        serializeScheduleEntity(writer, timeOffItem)
        writer.writeStringValue("timeOffReasonId", timeOffItem.timeOffReasonId);
}
