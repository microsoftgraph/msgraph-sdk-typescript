import { deserializeIntoTeamsAsyncOperationCollectionResponse } from './deserializeIntoTeamsAsyncOperationCollectionResponse';
import { type TeamsAsyncOperationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsAsyncOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAsyncOperationCollectionResponse;
}
