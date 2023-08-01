import type {Entity} from './entity';
import type {TodoTaskList} from './todoTaskList';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Todo extends Entity, Parsable {
    /**
     * The task lists in the users mailbox.
     */
    lists?: TodoTaskList[] | undefined;
}
