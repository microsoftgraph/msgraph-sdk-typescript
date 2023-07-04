import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DefaultManagedAppProtection} from './defaultManagedAppProtection';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DefaultManagedAppProtectionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DefaultManagedAppProtection[] | undefined;
}
