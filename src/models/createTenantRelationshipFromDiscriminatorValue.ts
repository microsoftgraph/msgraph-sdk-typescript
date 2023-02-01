import {TenantRelationship} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTenantRelationshipFromDiscriminatorValue(parseNode: ParseNode | undefined) : TenantRelationship {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TenantRelationship();
}
