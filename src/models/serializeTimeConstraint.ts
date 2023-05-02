import {ActivityDomain} from './activityDomain';
import {serializeTimeSlot} from './serializeTimeSlot';
import {TimeConstraint} from './timeConstraint';
import {TimeSlot} from './timeSlot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeConstraint(writer: SerializationWriter, timeConstraint: TimeConstraint | undefined = {} as TimeConstraint) : void {
        writer.writeEnumValue<ActivityDomain>("activityDomain", timeConstraint.activityDomain);
        writer.writeStringValue("@odata.type", timeConstraint.odataType);
        writer.writeCollectionOfObjectValues<TimeSlot>("timeSlots", timeConstraint.timeSlots, serializeTimeSlot);
        writer.writeAdditionalData(timeConstraint.additionalData);
}
