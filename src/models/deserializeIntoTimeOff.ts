import {createTimeOffItemFromDiscriminatorValue} from './createTimeOffItemFromDiscriminatorValue';
import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {serializeTimeOffItem} from './serializeTimeOffItem';
import {TimeOff} from './timeOff';
import {TimeOffItem} from './timeOffItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOff(timeOff: TimeOff | undefined = {} as TimeOff) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(timeOff),
        "draftTimeOff": n => { timeOff.draftTimeOff = n.getObjectValue<TimeOffItem>(createTimeOffItemFromDiscriminatorValue); },
        "sharedTimeOff": n => { timeOff.sharedTimeOff = n.getObjectValue<TimeOffItem>(createTimeOffItemFromDiscriminatorValue); },
        "userId": n => { timeOff.userId = n.getStringValue(); },
    }
}
