import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {LicenseDetails} from './licenseDetails';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LicenseDetailsCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: LicenseDetails[] | undefined;
}
