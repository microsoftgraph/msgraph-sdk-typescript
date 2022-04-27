import {LongRunningOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLongRunningOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : LongRunningOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LongRunningOperation();
}
