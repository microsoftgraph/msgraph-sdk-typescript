import {serializeChangeTrackedEntity} from './serializeChangeTrackedEntity';
import {serializeShiftAvailability} from './serializeShiftAvailability';
import {ShiftAvailability} from './shiftAvailability';
import {ShiftPreferences} from './shiftPreferences';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShiftPreferences(writer: SerializationWriter, shiftPreferences: ShiftPreferences | undefined = {} as ShiftPreferences) : void {
        serializeChangeTrackedEntity(writer, shiftPreferences)
        writer.writeCollectionOfObjectValues<ShiftAvailability>("availability", shiftPreferences.availability, serializeShiftAvailability);
}
