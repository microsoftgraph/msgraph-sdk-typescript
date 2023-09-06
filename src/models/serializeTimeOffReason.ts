import { serializeChangeTrackedEntity } from './serializeChangeTrackedEntity';
import { type TimeOffReason } from './timeOffReason';
import { TimeOffReasonIconType } from './timeOffReasonIconType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTimeOffReason(writer: SerializationWriter, timeOffReason: TimeOffReason | undefined = {} as TimeOffReason) : void {
        serializeChangeTrackedEntity(writer, timeOffReason)
        writer.writeStringValue("displayName", timeOffReason.displayName);
        writer.writeEnumValue<TimeOffReasonIconType>("iconType", timeOffReason.iconType);
        writer.writeBooleanValue("isActive", timeOffReason.isActive);
}
