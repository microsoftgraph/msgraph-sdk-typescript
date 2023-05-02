import {deserializeIntoManagedAppOperationCollectionResponse} from './deserializeIntoManagedAppOperationCollectionResponse';
import {ManagedAppOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAppOperationCollectionResponse;
}
