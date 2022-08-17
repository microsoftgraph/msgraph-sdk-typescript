import {OrganizationalBranding, OrganizationalBrandingLocalization, OrganizationalBrandingProperties} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationalBrandingPropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrganizationalBrandingProperties {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.organizationalBranding":
                    return new OrganizationalBranding();
                case "#microsoft.graph.organizationalBrandingLocalization":
                    return new OrganizationalBrandingLocalization();
            }
        }
    }
    return new OrganizationalBrandingProperties();
}
