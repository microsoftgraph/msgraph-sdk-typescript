import {ShiftAvailabilityCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftAvailabilityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ShiftAvailabilityCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ShiftAvailabilityCollectionResponse();
}
