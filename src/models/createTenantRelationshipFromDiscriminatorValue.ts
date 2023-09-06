import { deserializeIntoTenantRelationship } from './deserializeIntoTenantRelationship';
import { type TenantRelationship } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTenantRelationshipFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTenantRelationship;
}
