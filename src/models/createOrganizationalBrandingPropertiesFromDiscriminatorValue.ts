import {OrganizationalBrandingPropertiesImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationalBrandingPropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrganizationalBrandingPropertiesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrganizationalBrandingPropertiesImpl();
}
