import {TeamsAsyncOperationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAsyncOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAsyncOperationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAsyncOperationCollectionResponseImpl();
}
