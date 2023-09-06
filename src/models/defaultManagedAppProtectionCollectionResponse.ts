import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DefaultManagedAppProtection } from './defaultManagedAppProtection';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DefaultManagedAppProtectionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DefaultManagedAppProtection[] | undefined;
}
