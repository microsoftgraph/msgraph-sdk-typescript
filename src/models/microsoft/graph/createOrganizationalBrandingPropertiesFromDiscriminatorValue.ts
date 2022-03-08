import {OrganizationalBrandingProperties} from './organizationalBrandingProperties';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationalBrandingPropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrganizationalBrandingProperties {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrganizationalBrandingProperties();
}
