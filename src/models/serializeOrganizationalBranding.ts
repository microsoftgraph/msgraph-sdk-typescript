import {OrganizationalBranding} from './organizationalBranding';
import {OrganizationalBrandingLocalization} from './organizationalBrandingLocalization';
import {serializeOrganizationalBrandingLocalization} from './serializeOrganizationalBrandingLocalization';
import {serializeOrganizationalBrandingProperties} from './serializeOrganizationalBrandingProperties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrganizationalBranding(writer: SerializationWriter, organizationalBranding: OrganizationalBranding | undefined = {} as OrganizationalBranding) : void {
        serializeOrganizationalBrandingProperties(writer, organizationalBranding)
        writer.writeCollectionOfObjectValues<OrganizationalBrandingLocalization>("localizations", organizationalBranding.localizations, serializeOrganizationalBrandingLocalization);
}
