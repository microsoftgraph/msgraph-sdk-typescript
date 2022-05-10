import {LongRunningOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLongRunningOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : LongRunningOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LongRunningOperationImpl();
}
