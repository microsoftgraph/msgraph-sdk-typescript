import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeShift} from './serializeShift';
import {Shift} from './shift';
import {ShiftCollectionResponse} from './shiftCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShiftCollectionResponse(writer: SerializationWriter, shiftCollectionResponse: ShiftCollectionResponse | undefined = {} as ShiftCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, shiftCollectionResponse)
        writer.writeCollectionOfObjectValues<Shift>("value", shiftCollectionResponse.value, serializeShift);
}
