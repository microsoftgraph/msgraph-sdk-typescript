import {deserializeIntoResourceOperationCollectionResponse} from './deserializeIntoResourceOperationCollectionResponse';
import {ResourceOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResourceOperationCollectionResponse;
}
