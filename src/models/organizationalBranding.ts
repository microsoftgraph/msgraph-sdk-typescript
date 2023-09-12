import { type OrganizationalBrandingLocalization } from './organizationalBrandingLocalization';
import { type OrganizationalBrandingProperties } from './organizationalBrandingProperties';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface OrganizationalBranding extends OrganizationalBrandingProperties, Parsable {
    /**
     * Add different branding based on a locale.
     */
    localizations?: OrganizationalBrandingLocalization[] | undefined;
}
