import { ActivityDomain } from './activityDomain';
import { createTimeSlotFromDiscriminatorValue } from './createTimeSlotFromDiscriminatorValue';
import { serializeTimeSlot } from './serializeTimeSlot';
import { type TimeConstraint } from './timeConstraint';
import { type TimeSlot } from './timeSlot';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeConstraint(timeConstraint: TimeConstraint | undefined = {} as TimeConstraint) : Record<string, (node: ParseNode) => void> {
    return {
        "activityDomain": n => { timeConstraint.activityDomain = n.getEnumValue<ActivityDomain>(ActivityDomain); },
        "@odata.type": n => { timeConstraint.odataType = n.getStringValue(); },
        "timeSlots": n => { timeConstraint.timeSlots = n.getCollectionOfObjectValues<TimeSlot>(createTimeSlotFromDiscriminatorValue); },
    }
}
