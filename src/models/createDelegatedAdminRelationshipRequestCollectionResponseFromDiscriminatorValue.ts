import { deserializeIntoDelegatedAdminRelationshipRequestCollectionResponse } from './deserializeIntoDelegatedAdminRelationshipRequestCollectionResponse';
import { type DelegatedAdminRelationshipRequestCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminRelationshipRequestCollectionResponse;
}
