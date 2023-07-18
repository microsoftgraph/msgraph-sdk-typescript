import {AllowInvitesFrom} from './allowInvitesFrom';
import {AuthorizationPolicy} from './authorizationPolicy';
import {DefaultUserRolePermissions} from './defaultUserRolePermissions';
import {serializeDefaultUserRolePermissions} from './serializeDefaultUserRolePermissions';
import {serializePolicyBase} from './serializePolicyBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeAuthorizationPolicy(writer: SerializationWriter, authorizationPolicy: AuthorizationPolicy | undefined = {} as AuthorizationPolicy) : void {
        serializePolicyBase(writer, authorizationPolicy)
        writer.writeBooleanValue("allowedToSignUpEmailBasedSubscriptions", authorizationPolicy.allowedToSignUpEmailBasedSubscriptions);
        writer.writeBooleanValue("allowedToUseSSPR", authorizationPolicy.allowedToUseSSPR);
        writer.writeBooleanValue("allowEmailVerifiedUsersToJoinOrganization", authorizationPolicy.allowEmailVerifiedUsersToJoinOrganization);
        writer.writeEnumValue<AllowInvitesFrom>("allowInvitesFrom", authorizationPolicy.allowInvitesFrom);
        writer.writeBooleanValue("allowUserConsentForRiskyApps", authorizationPolicy.allowUserConsentForRiskyApps);
        writer.writeBooleanValue("blockMsolPowerShell", authorizationPolicy.blockMsolPowerShell);
        writer.writeObjectValue<DefaultUserRolePermissions>("defaultUserRolePermissions", authorizationPolicy.defaultUserRolePermissions, serializeDefaultUserRolePermissions);
        writer.writeGuidValue("guestUserRoleId", authorizationPolicy.guestUserRoleId);
}
