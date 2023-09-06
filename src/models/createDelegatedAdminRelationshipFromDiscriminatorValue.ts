import { deserializeIntoDelegatedAdminRelationship } from './deserializeIntoDelegatedAdminRelationship';
import { type DelegatedAdminRelationship } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminRelationship;
}
