import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type IosManagedAppProtection } from './iosManagedAppProtection';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface IosManagedAppProtectionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: IosManagedAppProtection[] | undefined;
}
