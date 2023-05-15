import {serializeChangeTrackedEntity} from './serializeChangeTrackedEntity';
import {serializeTimeOffItem} from './serializeTimeOffItem';
import {TimeOff} from './timeOff';
import {TimeOffItem} from './timeOffItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeOff(writer: SerializationWriter, timeOff: TimeOff | undefined = {} as TimeOff) : void {
        serializeChangeTrackedEntity(writer, timeOff)
        writer.writeObjectValue<TimeOffItem>("draftTimeOff", timeOff.draftTimeOff, serializeTimeOffItem);
        writer.writeObjectValue<TimeOffItem>("sharedTimeOff", timeOff.sharedTimeOff, serializeTimeOffItem);
        writer.writeStringValue("userId", timeOff.userId);
}
