import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {List} from './list';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ListCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: List[] | undefined;
}
