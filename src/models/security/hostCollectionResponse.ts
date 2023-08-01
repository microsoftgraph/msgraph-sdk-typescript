import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {Host} from './host';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface HostCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Host[] | undefined;
}
