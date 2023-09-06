import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type OrganizationalBrandingLocalization } from './organizationalBrandingLocalization';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface OrganizationalBrandingLocalizationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OrganizationalBrandingLocalization[] | undefined;
}
