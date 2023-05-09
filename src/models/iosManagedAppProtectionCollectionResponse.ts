import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {IosManagedAppProtection} from './iosManagedAppProtection';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosManagedAppProtectionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: IosManagedAppProtection[] | undefined;
}
