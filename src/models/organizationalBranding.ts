import {OrganizationalBrandingLocalization} from './organizationalBrandingLocalization';
import {OrganizationalBrandingProperties} from './organizationalBrandingProperties';

export interface OrganizationalBranding extends OrganizationalBrandingProperties{
    /** Add different branding based on a locale. */
    localizations?:OrganizationalBrandingLocalization[] | undefined;
}
