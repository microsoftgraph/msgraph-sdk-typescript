import {EdiscoveryHoldOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryHoldOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryHoldOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryHoldOperationCollectionResponse();
}
