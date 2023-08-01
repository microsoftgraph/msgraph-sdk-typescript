import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {TodoTask} from './todoTask';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TodoTaskCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TodoTask[] | undefined;
}
