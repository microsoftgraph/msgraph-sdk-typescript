import {deserializeIntoOnenoteOperationCollectionResponse} from './deserializeIntoOnenoteOperationCollectionResponse';
import {OnenoteOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenoteOperationCollectionResponse;
}
