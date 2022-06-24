import {OrganizationalBrandingImpl, OrganizationalBrandingLocalizationImpl, OrganizationalBrandingPropertiesImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationalBrandingPropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrganizationalBrandingPropertiesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.organizationalBranding":
                    return new OrganizationalBrandingImpl();
                case "#microsoft.graph.organizationalBrandingLocalization":
                    return new OrganizationalBrandingLocalizationImpl();
            }
        }
    }
    return new OrganizationalBrandingPropertiesImpl();
}
