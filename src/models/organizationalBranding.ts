import {OrganizationalBrandingLocalization} from './organizationalBrandingLocalization';
import {OrganizationalBrandingProperties} from './organizationalBrandingProperties';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OrganizationalBranding extends OrganizationalBrandingProperties, Parsable {
    /**
     * Add different branding based on a locale.
     */
    localizations?: OrganizationalBrandingLocalization[] | undefined;
}
