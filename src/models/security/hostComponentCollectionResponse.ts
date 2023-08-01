import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {HostComponent} from './hostComponent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface HostComponentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: HostComponent[] | undefined;
}
