import {ShiftCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ShiftCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ShiftCollectionResponseImpl();
}
