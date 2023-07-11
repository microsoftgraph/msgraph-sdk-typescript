import {AndroidManagedAppProtection} from './androidManagedAppProtection';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidManagedAppProtectionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AndroidManagedAppProtection[] | undefined;
}
