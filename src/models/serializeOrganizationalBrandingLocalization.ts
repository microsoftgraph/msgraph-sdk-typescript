import { type OrganizationalBrandingLocalization } from './organizationalBrandingLocalization';
import { serializeOrganizationalBrandingProperties } from './serializeOrganizationalBrandingProperties';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOrganizationalBrandingLocalization(writer: SerializationWriter, organizationalBrandingLocalization: OrganizationalBrandingLocalization | undefined = {} as OrganizationalBrandingLocalization) : void {
        serializeOrganizationalBrandingProperties(writer, organizationalBrandingLocalization)
}
