import { deserializeIntoPendingOperations } from './deserializeIntoPendingOperations';
import { type PendingOperations } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPendingOperationsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPendingOperations;
}
