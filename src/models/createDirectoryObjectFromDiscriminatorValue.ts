import {ActivityBasedTimeoutPolicy, AdministrativeUnit, Application, AppRoleAssignment, AuthorizationPolicy, ClaimsMappingPolicy, Contract, CrossTenantAccessPolicy, Device, DirectoryObject, DirectoryObjectPartnerReference, DirectoryRole, DirectoryRoleTemplate, Endpoint, ExtensionProperty, Group, GroupSettingTemplate, HomeRealmDiscoveryPolicy, IdentitySecurityDefaultsEnforcementPolicy, Organization, OrgContact, PermissionGrantPolicy, PolicyBase, ResourceSpecificPermissionGrant, ServicePrincipal, StsPolicy, TokenIssuancePolicy, TokenLifetimePolicy, User} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectoryObject {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.activityBasedTimeoutPolicy":
                    return new ActivityBasedTimeoutPolicy();
                case "#microsoft.graph.administrativeUnit":
                    return new AdministrativeUnit();
                case "#microsoft.graph.application":
                    return new Application();
                case "#microsoft.graph.appRoleAssignment":
                    return new AppRoleAssignment();
                case "#microsoft.graph.authorizationPolicy":
                    return new AuthorizationPolicy();
                case "#microsoft.graph.claimsMappingPolicy":
                    return new ClaimsMappingPolicy();
                case "#microsoft.graph.contract":
                    return new Contract();
                case "#microsoft.graph.crossTenantAccessPolicy":
                    return new CrossTenantAccessPolicy();
                case "#microsoft.graph.device":
                    return new Device();
                case "#microsoft.graph.directoryObjectPartnerReference":
                    return new DirectoryObjectPartnerReference();
                case "#microsoft.graph.directoryRole":
                    return new DirectoryRole();
                case "#microsoft.graph.directoryRoleTemplate":
                    return new DirectoryRoleTemplate();
                case "#microsoft.graph.endpoint":
                    return new Endpoint();
                case "#microsoft.graph.extensionProperty":
                    return new ExtensionProperty();
                case "#microsoft.graph.group":
                    return new Group();
                case "#microsoft.graph.groupSettingTemplate":
                    return new GroupSettingTemplate();
                case "#microsoft.graph.homeRealmDiscoveryPolicy":
                    return new HomeRealmDiscoveryPolicy();
                case "#microsoft.graph.identitySecurityDefaultsEnforcementPolicy":
                    return new IdentitySecurityDefaultsEnforcementPolicy();
                case "#microsoft.graph.organization":
                    return new Organization();
                case "#microsoft.graph.orgContact":
                    return new OrgContact();
                case "#microsoft.graph.permissionGrantPolicy":
                    return new PermissionGrantPolicy();
                case "#microsoft.graph.policyBase":
                    return new PolicyBase();
                case "#microsoft.graph.resourceSpecificPermissionGrant":
                    return new ResourceSpecificPermissionGrant();
                case "#microsoft.graph.servicePrincipal":
                    return new ServicePrincipal();
                case "#microsoft.graph.stsPolicy":
                    return new StsPolicy();
                case "#microsoft.graph.tokenIssuancePolicy":
                    return new TokenIssuancePolicy();
                case "#microsoft.graph.tokenLifetimePolicy":
                    return new TokenLifetimePolicy();
                case "#microsoft.graph.user":
                    return new User();
            }
        }
    }
    return new DirectoryObject();
}
