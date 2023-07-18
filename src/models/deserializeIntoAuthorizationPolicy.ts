import {AllowInvitesFrom} from './allowInvitesFrom';
import {AuthorizationPolicy} from './authorizationPolicy';
import {createDefaultUserRolePermissionsFromDiscriminatorValue} from './createDefaultUserRolePermissionsFromDiscriminatorValue';
import {DefaultUserRolePermissions} from './defaultUserRolePermissions';
import {deserializeIntoPolicyBase} from './deserializeIntoPolicyBase';
import {serializeDefaultUserRolePermissions} from './serializeDefaultUserRolePermissions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoAuthorizationPolicy(authorizationPolicy: AuthorizationPolicy | undefined = {} as AuthorizationPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPolicyBase(authorizationPolicy),
        "allowedToSignUpEmailBasedSubscriptions": n => { authorizationPolicy.allowedToSignUpEmailBasedSubscriptions = n.getBooleanValue(); },
        "allowedToUseSSPR": n => { authorizationPolicy.allowedToUseSSPR = n.getBooleanValue(); },
        "allowEmailVerifiedUsersToJoinOrganization": n => { authorizationPolicy.allowEmailVerifiedUsersToJoinOrganization = n.getBooleanValue(); },
        "allowInvitesFrom": n => { authorizationPolicy.allowInvitesFrom = n.getEnumValue<AllowInvitesFrom>(AllowInvitesFrom); },
        "allowUserConsentForRiskyApps": n => { authorizationPolicy.allowUserConsentForRiskyApps = n.getBooleanValue(); },
        "blockMsolPowerShell": n => { authorizationPolicy.blockMsolPowerShell = n.getBooleanValue(); },
        "defaultUserRolePermissions": n => { authorizationPolicy.defaultUserRolePermissions = n.getObjectValue<DefaultUserRolePermissions>(createDefaultUserRolePermissionsFromDiscriminatorValue); },
        "guestUserRoleId": n => { authorizationPolicy.guestUserRoleId = n.getGuidValue(); },
    }
}
