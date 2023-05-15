import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Post} from './post';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PostCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Post[] | undefined;
}
