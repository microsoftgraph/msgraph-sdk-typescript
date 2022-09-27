import {EdiscoveryIndexOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryIndexOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryIndexOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryIndexOperationCollectionResponse();
}
