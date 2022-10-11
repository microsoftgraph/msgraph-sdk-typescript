import {CancelMediaProcessingOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCancelMediaProcessingOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CancelMediaProcessingOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CancelMediaProcessingOperationCollectionResponse();
}
