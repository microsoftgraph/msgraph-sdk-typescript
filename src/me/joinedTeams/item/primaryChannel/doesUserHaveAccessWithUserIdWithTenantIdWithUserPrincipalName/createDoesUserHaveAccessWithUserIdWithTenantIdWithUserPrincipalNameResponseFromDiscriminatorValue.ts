import {DoesUserHaveAccessWithUserIdWithTenantIdWithUserPrincipalNameResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDoesUserHaveAccessWithUserIdWithTenantIdWithUserPrincipalNameResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DoesUserHaveAccessWithUserIdWithTenantIdWithUserPrincipalNameResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DoesUserHaveAccessWithUserIdWithTenantIdWithUserPrincipalNameResponse();
}
