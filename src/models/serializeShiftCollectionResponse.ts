import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeShift } from './serializeShift';
import { type Shift } from './shift';
import { type ShiftCollectionResponse } from './shiftCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeShiftCollectionResponse(writer: SerializationWriter, shiftCollectionResponse: ShiftCollectionResponse | undefined = {} as ShiftCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, shiftCollectionResponse)
        writer.writeCollectionOfObjectValues<Shift>("value", shiftCollectionResponse.value, serializeShift);
}
