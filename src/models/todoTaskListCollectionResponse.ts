import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type TodoTaskList } from './todoTaskList';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TodoTaskListCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TodoTaskList[] | undefined;
}
