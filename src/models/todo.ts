import {Entity} from './entity';
import {TodoTaskList} from './todoTaskList';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Todo extends Entity, Partial<Parsable> {
    /** The task lists in the users mailbox. */
    lists?: TodoTaskList[] | undefined;
}
