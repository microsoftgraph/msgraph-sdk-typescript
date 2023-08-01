import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Device} from './device';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Device[] | undefined;
}
