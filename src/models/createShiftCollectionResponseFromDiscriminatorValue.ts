import { deserializeIntoShiftCollectionResponse } from './deserializeIntoShiftCollectionResponse';
import { type ShiftCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createShiftCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoShiftCollectionResponse;
}
