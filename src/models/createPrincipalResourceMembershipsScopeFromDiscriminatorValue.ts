import {deserializeIntoPrincipalResourceMembershipsScope} from './deserializeIntoPrincipalResourceMembershipsScope';
import {PrincipalResourceMembershipsScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrincipalResourceMembershipsScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrincipalResourceMembershipsScope;
}
