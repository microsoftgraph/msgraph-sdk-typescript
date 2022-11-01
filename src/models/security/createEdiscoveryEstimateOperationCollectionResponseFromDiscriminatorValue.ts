import {EdiscoveryEstimateOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryEstimateOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryEstimateOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryEstimateOperationCollectionResponse();
}
