import {deserializeIntoOrganizationalBrandingProperties} from './deserializeIntoOrganizationalBrandingProperties';
import {OrganizationalBrandingLocalization} from './organizationalBrandingLocalization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganizationalBrandingLocalization(organizationalBrandingLocalization: OrganizationalBrandingLocalization | undefined = {} as OrganizationalBrandingLocalization) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOrganizationalBrandingProperties(organizationalBrandingLocalization),
    }
}
