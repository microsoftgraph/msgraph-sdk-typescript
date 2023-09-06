import { createShiftFromDiscriminatorValue } from './createShiftFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeShift } from './serializeShift';
import { type Shift } from './shift';
import { type ShiftCollectionResponse } from './shiftCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoShiftCollectionResponse(shiftCollectionResponse: ShiftCollectionResponse | undefined = {} as ShiftCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(shiftCollectionResponse),
        "value": n => { shiftCollectionResponse.value = n.getCollectionOfObjectValues<Shift>(createShiftFromDiscriminatorValue); },
    }
}
