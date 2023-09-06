import { deserializeIntoManagedAppOperation } from './deserializeIntoManagedAppOperation';
import { type ManagedAppOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedAppOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAppOperation;
}
