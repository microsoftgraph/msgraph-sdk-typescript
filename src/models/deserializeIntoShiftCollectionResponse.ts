import {createShiftFromDiscriminatorValue} from './createShiftFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeShift} from './serializeShift';
import {Shift} from './shift';
import {ShiftCollectionResponse} from './shiftCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoShiftCollectionResponse(shiftCollectionResponse: ShiftCollectionResponse | undefined = {} as ShiftCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(shiftCollectionResponse),
        "value": n => { shiftCollectionResponse.value = n.getCollectionOfObjectValues<Shift>(createShiftFromDiscriminatorValue); },
    }
}
