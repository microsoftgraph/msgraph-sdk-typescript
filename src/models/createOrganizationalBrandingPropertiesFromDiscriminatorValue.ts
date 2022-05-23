import {OrganizationalBrandingPropertiesImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationalBrandingPropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrganizationalBrandingPropertiesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.organizationalBrandingProperties":
                    return new OrganizationalBrandingPropertiesImpl();
            }
        }
    }
    return new OrganizationalBrandingPropertiesImpl();
}
