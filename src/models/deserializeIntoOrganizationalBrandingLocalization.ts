import { deserializeIntoOrganizationalBrandingProperties } from './deserializeIntoOrganizationalBrandingProperties';
import { type OrganizationalBrandingLocalization } from './organizationalBrandingLocalization';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganizationalBrandingLocalization(organizationalBrandingLocalization: OrganizationalBrandingLocalization | undefined = {} as OrganizationalBrandingLocalization) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOrganizationalBrandingProperties(organizationalBrandingLocalization),
    }
}
