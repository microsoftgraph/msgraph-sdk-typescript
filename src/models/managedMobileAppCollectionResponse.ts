import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ManagedMobileApp} from './managedMobileApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedMobileAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedMobileApp[] | undefined;
}
