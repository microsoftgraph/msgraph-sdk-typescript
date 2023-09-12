import { deserializeIntoPrincipalResourceMembershipsScope } from './deserializeIntoPrincipalResourceMembershipsScope';
import { type PrincipalResourceMembershipsScope } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrincipalResourceMembershipsScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrincipalResourceMembershipsScope;
}
