import {ManagedAppOperationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppOperationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppOperationCollectionResponseImpl();
}
