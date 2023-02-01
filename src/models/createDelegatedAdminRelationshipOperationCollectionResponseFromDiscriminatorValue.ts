import {DelegatedAdminRelationshipOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DelegatedAdminRelationshipOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DelegatedAdminRelationshipOperationCollectionResponse();
}
