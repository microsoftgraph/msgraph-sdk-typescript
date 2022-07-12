import {AdministrativeUnit, Application, AppRoleAssignment, Contract, Device, DirectoryObject, DirectoryObjectPartnerReference, DirectoryRole, DirectoryRoleTemplate, Endpoint, ExtensionProperty, Group, GroupSettingTemplate, Organization, OrgContact, PolicyBase, ResourceSpecificPermissionGrant, ServicePrincipal, User} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectoryObject {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.administrativeUnit":
                    return new AdministrativeUnit();
                case "#microsoft.graph.application":
                    return new Application();
                case "#microsoft.graph.appRoleAssignment":
                    return new AppRoleAssignment();
                case "#microsoft.graph.contract":
                    return new Contract();
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
                case "#microsoft.graph.organization":
                    return new Organization();
                case "#microsoft.graph.orgContact":
                    return new OrgContact();
                case "#microsoft.graph.policyBase":
                    return new PolicyBase();
                case "#microsoft.graph.resourceSpecificPermissionGrant":
                    return new ResourceSpecificPermissionGrant();
                case "#microsoft.graph.servicePrincipal":
                    return new ServicePrincipal();
                case "#microsoft.graph.user":
                    return new User();
            }
        }
    }
    return new DirectoryObject();
}
