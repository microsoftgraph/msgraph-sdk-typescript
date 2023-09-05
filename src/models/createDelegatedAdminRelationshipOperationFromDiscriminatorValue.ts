import { deserializeIntoDelegatedAdminRelationshipOperation } from './deserializeIntoDelegatedAdminRelationshipOperation';
import { type DelegatedAdminRelationshipOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminRelationshipOperation;
}
