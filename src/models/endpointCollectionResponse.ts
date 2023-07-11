import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Endpoint} from './endpoint';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EndpointCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Endpoint[] | undefined;
}
