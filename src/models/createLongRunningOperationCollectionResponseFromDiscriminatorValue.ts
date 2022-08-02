import {LongRunningOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLongRunningOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LongRunningOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LongRunningOperationCollectionResponse();
}
