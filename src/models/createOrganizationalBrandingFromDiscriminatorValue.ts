import {deserializeIntoOrganizationalBranding} from './deserializeIntoOrganizationalBranding';
import {OrganizationalBranding} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationalBrandingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOrganizationalBranding;
}
