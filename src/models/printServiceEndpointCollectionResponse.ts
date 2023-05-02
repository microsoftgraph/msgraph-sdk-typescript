import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PrintServiceEndpoint} from './printServiceEndpoint';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintServiceEndpointCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: PrintServiceEndpoint[] | undefined;
}
