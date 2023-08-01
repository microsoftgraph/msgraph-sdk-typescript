import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ManagedMobileApp} from './managedMobileApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedMobileAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedMobileApp[] | undefined;
}
