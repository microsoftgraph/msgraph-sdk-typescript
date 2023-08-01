import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ManagedAppStatus} from './managedAppStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedAppStatus[] | undefined;
}
