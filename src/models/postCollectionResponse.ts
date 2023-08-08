import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Post} from './post';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface PostCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Post[] | undefined;
}
