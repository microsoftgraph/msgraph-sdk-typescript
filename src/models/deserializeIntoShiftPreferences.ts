import {createShiftAvailabilityFromDiscriminatorValue} from './createShiftAvailabilityFromDiscriminatorValue';
import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {serializeShiftAvailability} from './serializeShiftAvailability';
import {ShiftAvailability} from './shiftAvailability';
import {ShiftPreferences} from './shiftPreferences';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoShiftPreferences(shiftPreferences: ShiftPreferences | undefined = {} as ShiftPreferences) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(shiftPreferences),
        "availability": n => { shiftPreferences.availability = n.getCollectionOfObjectValues<ShiftAvailability>(createShiftAvailabilityFromDiscriminatorValue); },
    }
}
