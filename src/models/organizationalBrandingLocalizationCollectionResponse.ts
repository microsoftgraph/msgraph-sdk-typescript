import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {OrganizationalBrandingLocalization} from './organizationalBrandingLocalization';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OrganizationalBrandingLocalizationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OrganizationalBrandingLocalization[] | undefined;
}
