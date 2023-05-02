import {BaseCollectionPaginationCountResponse} from '../../models/baseCollectionPaginationCountResponse';
import {SearchResponse} from '../../models/searchResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface QueryResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: SearchResponse[] | undefined;
}
