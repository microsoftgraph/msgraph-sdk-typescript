import { deserializeIntoOrganizationalBranding } from './deserializeIntoOrganizationalBranding';
import { type OrganizationalBranding } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOrganizationalBrandingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOrganizationalBranding;
}
