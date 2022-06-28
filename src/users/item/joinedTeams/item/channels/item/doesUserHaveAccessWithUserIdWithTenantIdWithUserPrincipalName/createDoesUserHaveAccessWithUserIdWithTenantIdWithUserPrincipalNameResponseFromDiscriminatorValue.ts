import {DoesUserHaveAccessWithUserIdWithTenantIdWithUserPrincipalNameResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDoesUserHaveAccessWithUserIdWithTenantIdWithUserPrincipalNameResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DoesUserHaveAccessWithUserIdWithTenantIdWithUserPrincipalNameResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DoesUserHaveAccessWithUserIdWithTenantIdWithUserPrincipalNameResponseImpl();
}
