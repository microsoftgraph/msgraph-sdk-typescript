import {deserializeIntoTenantRelationship} from './deserializeIntoTenantRelationship';
import {TenantRelationship} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTenantRelationshipFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTenantRelationship;
}
