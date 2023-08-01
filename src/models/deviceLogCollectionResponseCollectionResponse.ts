import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DeviceLogCollectionResponse} from './deviceLogCollectionResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceLogCollectionResponseCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceLogCollectionResponse[] | undefined;
}
