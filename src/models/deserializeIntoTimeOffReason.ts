import { deserializeIntoChangeTrackedEntity } from './deserializeIntoChangeTrackedEntity';
import { type TimeOffReason } from './timeOffReason';
import { TimeOffReasonIconType } from './timeOffReasonIconType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOffReason(timeOffReason: TimeOffReason | undefined = {} as TimeOffReason) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(timeOffReason),
        "displayName": n => { timeOffReason.displayName = n.getStringValue(); },
        "iconType": n => { timeOffReason.iconType = n.getEnumValue<TimeOffReasonIconType>(TimeOffReasonIconType); },
        "isActive": n => { timeOffReason.isActive = n.getBooleanValue(); },
    }
}
