import {AdministrativeUnitImpl, ApplicationImpl, AppRoleAssignmentImpl, ContractImpl, DeviceImpl, DirectoryObjectImpl, DirectoryObjectPartnerReferenceImpl, DirectoryRoleImpl, DirectoryRoleTemplateImpl, EndpointImpl, ExtensionPropertyImpl, GroupImpl, GroupSettingTemplateImpl, OrganizationImpl, OrgContactImpl, PolicyBaseImpl, ResourceSpecificPermissionGrantImpl, ServicePrincipalImpl, UserImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectoryObjectImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.administrativeUnit":
                    return new AdministrativeUnitImpl();
                case "#microsoft.graph.application":
                    return new ApplicationImpl();
                case "#microsoft.graph.appRoleAssignment":
                    return new AppRoleAssignmentImpl();
                case "#microsoft.graph.contract":
                    return new ContractImpl();
                case "#microsoft.graph.device":
                    return new DeviceImpl();
                case "#microsoft.graph.directoryObjectPartnerReference":
                    return new DirectoryObjectPartnerReferenceImpl();
                case "#microsoft.graph.directoryRole":
                    return new DirectoryRoleImpl();
                case "#microsoft.graph.directoryRoleTemplate":
                    return new DirectoryRoleTemplateImpl();
                case "#microsoft.graph.endpoint":
                    return new EndpointImpl();
                case "#microsoft.graph.extensionProperty":
                    return new ExtensionPropertyImpl();
                case "#microsoft.graph.group":
                    return new GroupImpl();
                case "#microsoft.graph.groupSettingTemplate":
                    return new GroupSettingTemplateImpl();
                case "#microsoft.graph.organization":
                    return new OrganizationImpl();
                case "#microsoft.graph.orgContact":
                    return new OrgContactImpl();
                case "#microsoft.graph.policyBase":
                    return new PolicyBaseImpl();
                case "#microsoft.graph.resourceSpecificPermissionGrant":
                    return new ResourceSpecificPermissionGrantImpl();
                case "#microsoft.graph.servicePrincipal":
                    return new ServicePrincipalImpl();
                case "#microsoft.graph.user":
                    return new UserImpl();
            }
        }
    }
    return new DirectoryObjectImpl();
}
