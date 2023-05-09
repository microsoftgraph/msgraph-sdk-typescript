import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TodoTaskList} from './todoTaskList';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TodoTaskListCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: TodoTaskList[] | undefined;
}
