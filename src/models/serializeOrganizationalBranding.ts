import { type OrganizationalBranding } from './organizationalBranding';
import { type OrganizationalBrandingLocalization } from './organizationalBrandingLocalization';
import { serializeOrganizationalBrandingLocalization } from './serializeOrganizationalBrandingLocalization';
import { serializeOrganizationalBrandingProperties } from './serializeOrganizationalBrandingProperties';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOrganizationalBranding(writer: SerializationWriter, organizationalBranding: OrganizationalBranding | undefined = {} as OrganizationalBranding) : void {
        serializeOrganizationalBrandingProperties(writer, organizationalBranding)
        writer.writeCollectionOfObjectValues<OrganizationalBrandingLocalization>("localizations", organizationalBranding.localizations, serializeOrganizationalBrandingLocalization);
}
