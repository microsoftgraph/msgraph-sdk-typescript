import {deserializeIntoOrganizationalBranding} from './deserializeIntoOrganizationalBranding';
import {deserializeIntoOrganizationalBrandingLocalization} from './deserializeIntoOrganizationalBrandingLocalization';
import {deserializeIntoOrganizationalBrandingProperties} from './deserializeIntoOrganizationalBrandingProperties';
import {OrganizationalBranding, OrganizationalBrandingLocalization, OrganizationalBrandingProperties} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationalBrandingPropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.organizationalBranding":
                    return deserializeIntoOrganizationalBranding;
                case "#microsoft.graph.organizationalBrandingLocalization":
                    return deserializeIntoOrganizationalBrandingLocalization;
            }
        }
    }
    return deserializeIntoOrganizationalBrandingProperties;
}
