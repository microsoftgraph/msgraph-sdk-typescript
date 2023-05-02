import {deserializeIntoManagedAppOperation} from './deserializeIntoManagedAppOperation';
import {ManagedAppOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAppOperation;
}
