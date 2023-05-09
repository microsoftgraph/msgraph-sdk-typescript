import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {TimeOffReason} from './timeOffReason';
import {TimeOffReasonIconType} from './timeOffReasonIconType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOffReason(timeOffReason: TimeOffReason | undefined = {} as TimeOffReason) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(timeOffReason),
        "displayName": n => { timeOffReason.displayName = n.getStringValue(); },
        "iconType": n => { timeOffReason.iconType = n.getEnumValue<TimeOffReasonIconType>(TimeOffReasonIconType); },
        "isActive": n => { timeOffReason.isActive = n.getBooleanValue(); },
    }
}
