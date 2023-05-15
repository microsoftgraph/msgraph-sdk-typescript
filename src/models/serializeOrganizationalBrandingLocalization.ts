import {OrganizationalBrandingLocalization} from './organizationalBrandingLocalization';
import {serializeOrganizationalBrandingProperties} from './serializeOrganizationalBrandingProperties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrganizationalBrandingLocalization(writer: SerializationWriter, organizationalBrandingLocalization: OrganizationalBrandingLocalization | undefined = {} as OrganizationalBrandingLocalization) : void {
        serializeOrganizationalBrandingProperties(writer, organizationalBrandingLocalization)
}
