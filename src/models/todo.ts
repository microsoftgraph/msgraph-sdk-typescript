import {Entity} from './entity';
import {TodoTaskList} from './todoTaskList';

export interface Todo extends Entity{
    /** The task lists in the users mailbox. */
    lists?:TodoTaskList[] | undefined;
}
