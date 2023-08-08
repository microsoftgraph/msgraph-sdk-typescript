import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {PrintServiceEndpoint} from './printServiceEndpoint';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintServiceEndpointCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PrintServiceEndpoint[] | undefined;
}
