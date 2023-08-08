import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {LicenseDetails} from './licenseDetails';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface LicenseDetailsCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: LicenseDetails[] | undefined;
}
