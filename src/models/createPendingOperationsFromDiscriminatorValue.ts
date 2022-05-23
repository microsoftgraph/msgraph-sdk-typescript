import {PendingOperationsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPendingOperationsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PendingOperationsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PendingOperationsImpl();
}
