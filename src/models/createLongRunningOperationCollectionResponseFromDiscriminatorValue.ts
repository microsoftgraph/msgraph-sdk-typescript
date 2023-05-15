import {deserializeIntoLongRunningOperationCollectionResponse} from './deserializeIntoLongRunningOperationCollectionResponse';
import {LongRunningOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLongRunningOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLongRunningOperationCollectionResponse;
}
