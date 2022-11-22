import {EdiscoveryPurgeDataOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryPurgeDataOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryPurgeDataOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryPurgeDataOperationCollectionResponse();
}
