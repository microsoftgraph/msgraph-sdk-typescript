import { serializeChangeTrackedEntity } from './serializeChangeTrackedEntity';
import { serializeShiftAvailability } from './serializeShiftAvailability';
import { type ShiftAvailability } from './shiftAvailability';
import { type ShiftPreferences } from './shiftPreferences';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeShiftPreferences(writer: SerializationWriter, shiftPreferences: ShiftPreferences | undefined = {} as ShiftPreferences) : void {
        serializeChangeTrackedEntity(writer, shiftPreferences)
        writer.writeCollectionOfObjectValues<ShiftAvailability>("availability", shiftPreferences.availability, serializeShiftAvailability);
}
