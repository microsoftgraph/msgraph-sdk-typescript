import {ShiftActivityCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftActivityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ShiftActivityCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ShiftActivityCollectionResponse();
}
