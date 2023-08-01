import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ServiceHealth} from './serviceHealth';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceHealthCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ServiceHealth[] | undefined;
}
