import {deserializeIntoActivityBasedTimeoutPolicy} from './deserializeIntoActivityBasedTimeoutPolicy';
import {deserializeIntoAdministrativeUnit} from './deserializeIntoAdministrativeUnit';
import {deserializeIntoApplication} from './deserializeIntoApplication';
import {deserializeIntoAppManagementPolicy} from './deserializeIntoAppManagementPolicy';
import {deserializeIntoAppRoleAssignment} from './deserializeIntoAppRoleAssignment';
import {deserializeIntoAuthorizationPolicy} from './deserializeIntoAuthorizationPolicy';
import {deserializeIntoClaimsMappingPolicy} from './deserializeIntoClaimsMappingPolicy';
import {deserializeIntoContract} from './deserializeIntoContract';
import {deserializeIntoCrossTenantAccessPolicy} from './deserializeIntoCrossTenantAccessPolicy';
import {deserializeIntoDevice} from './deserializeIntoDevice';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoDirectoryObjectPartnerReference} from './deserializeIntoDirectoryObjectPartnerReference';
import {deserializeIntoDirectoryRole} from './deserializeIntoDirectoryRole';
import {deserializeIntoDirectoryRoleTemplate} from './deserializeIntoDirectoryRoleTemplate';
import {deserializeIntoEndpoint} from './deserializeIntoEndpoint';
import {deserializeIntoExtensionProperty} from './deserializeIntoExtensionProperty';
import {deserializeIntoGroup} from './deserializeIntoGroup';
import {deserializeIntoGroupSettingTemplate} from './deserializeIntoGroupSettingTemplate';
import {deserializeIntoHomeRealmDiscoveryPolicy} from './deserializeIntoHomeRealmDiscoveryPolicy';
import {deserializeIntoIdentitySecurityDefaultsEnforcementPolicy} from './deserializeIntoIdentitySecurityDefaultsEnforcementPolicy';
import {deserializeIntoOrganization} from './deserializeIntoOrganization';
import {deserializeIntoOrgContact} from './deserializeIntoOrgContact';
import {deserializeIntoPermissionGrantPolicy} from './deserializeIntoPermissionGrantPolicy';
import {deserializeIntoPolicyBase} from './deserializeIntoPolicyBase';
import {deserializeIntoResourceSpecificPermissionGrant} from './deserializeIntoResourceSpecificPermissionGrant';
import {deserializeIntoServicePrincipal} from './deserializeIntoServicePrincipal';
import {deserializeIntoStsPolicy} from './deserializeIntoStsPolicy';
import {deserializeIntoTenantAppManagementPolicy} from './deserializeIntoTenantAppManagementPolicy';
import {deserializeIntoTokenIssuancePolicy} from './deserializeIntoTokenIssuancePolicy';
import {deserializeIntoTokenLifetimePolicy} from './deserializeIntoTokenLifetimePolicy';
import {deserializeIntoUser} from './deserializeIntoUser';
import {ActivityBasedTimeoutPolicy, AdministrativeUnit, Application, AppManagementPolicy, AppRoleAssignment, AuthorizationPolicy, ClaimsMappingPolicy, Contract, CrossTenantAccessPolicy, Device, DirectoryObject, DirectoryObjectPartnerReference, DirectoryRole, DirectoryRoleTemplate, Endpoint, ExtensionProperty, Group, GroupSettingTemplate, HomeRealmDiscoveryPolicy, IdentitySecurityDefaultsEnforcementPolicy, Organization, OrgContact, PermissionGrantPolicy, PolicyBase, ResourceSpecificPermissionGrant, ServicePrincipal, StsPolicy, TenantAppManagementPolicy, TokenIssuancePolicy, TokenLifetimePolicy, User} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.activityBasedTimeoutPolicy":
                    return deserializeIntoActivityBasedTimeoutPolicy;
                case "#microsoft.graph.administrativeUnit":
                    return deserializeIntoAdministrativeUnit;
                case "#microsoft.graph.application":
                    return deserializeIntoApplication;
                case "#microsoft.graph.appManagementPolicy":
                    return deserializeIntoAppManagementPolicy;
                case "#microsoft.graph.appRoleAssignment":
                    return deserializeIntoAppRoleAssignment;
                case "#microsoft.graph.authorizationPolicy":
                    return deserializeIntoAuthorizationPolicy;
                case "#microsoft.graph.claimsMappingPolicy":
                    return deserializeIntoClaimsMappingPolicy;
                case "#microsoft.graph.contract":
                    return deserializeIntoContract;
                case "#microsoft.graph.crossTenantAccessPolicy":
                    return deserializeIntoCrossTenantAccessPolicy;
                case "#microsoft.graph.device":
                    return deserializeIntoDevice;
                case "#microsoft.graph.directoryObjectPartnerReference":
                    return deserializeIntoDirectoryObjectPartnerReference;
                case "#microsoft.graph.directoryRole":
                    return deserializeIntoDirectoryRole;
                case "#microsoft.graph.directoryRoleTemplate":
                    return deserializeIntoDirectoryRoleTemplate;
                case "#microsoft.graph.endpoint":
                    return deserializeIntoEndpoint;
                case "#microsoft.graph.extensionProperty":
                    return deserializeIntoExtensionProperty;
                case "#microsoft.graph.group":
                    return deserializeIntoGroup;
                case "#microsoft.graph.groupSettingTemplate":
                    return deserializeIntoGroupSettingTemplate;
                case "#microsoft.graph.homeRealmDiscoveryPolicy":
                    return deserializeIntoHomeRealmDiscoveryPolicy;
                case "#microsoft.graph.identitySecurityDefaultsEnforcementPolicy":
                    return deserializeIntoIdentitySecurityDefaultsEnforcementPolicy;
                case "#microsoft.graph.organization":
                    return deserializeIntoOrganization;
                case "#microsoft.graph.orgContact":
                    return deserializeIntoOrgContact;
                case "#microsoft.graph.permissionGrantPolicy":
                    return deserializeIntoPermissionGrantPolicy;
                case "#microsoft.graph.policyBase":
                    return deserializeIntoPolicyBase;
                case "#microsoft.graph.resourceSpecificPermissionGrant":
                    return deserializeIntoResourceSpecificPermissionGrant;
                case "#microsoft.graph.servicePrincipal":
                    return deserializeIntoServicePrincipal;
                case "#microsoft.graph.stsPolicy":
                    return deserializeIntoStsPolicy;
                case "#microsoft.graph.tenantAppManagementPolicy":
                    return deserializeIntoTenantAppManagementPolicy;
                case "#microsoft.graph.tokenIssuancePolicy":
                    return deserializeIntoTokenIssuancePolicy;
                case "#microsoft.graph.tokenLifetimePolicy":
                    return deserializeIntoTokenLifetimePolicy;
                case "#microsoft.graph.user":
                    return deserializeIntoUser;
            }
        }
    }
    return deserializeIntoDirectoryObject;
}
