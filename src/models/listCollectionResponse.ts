import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {List} from './list';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ListCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: List[] | undefined;
}
