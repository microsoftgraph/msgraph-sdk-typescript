import { deserializeIntoDelegatedAdminRelationshipOperationCollectionResponse } from './deserializeIntoDelegatedAdminRelationshipOperationCollectionResponse';
import { type DelegatedAdminRelationshipOperationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminRelationshipOperationCollectionResponse;
}
