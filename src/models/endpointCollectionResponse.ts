import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Endpoint} from './endpoint';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EndpointCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Endpoint[] | undefined;
}
