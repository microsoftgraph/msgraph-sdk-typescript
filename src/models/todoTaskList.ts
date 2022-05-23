import {Entity} from './entity';
import {Extension} from './extension';
import {TodoTask} from './todoTask';
import {WellknownListName} from './wellknownListName';

export interface TodoTaskList extends Entity{
    /** The name of the task list. */
    displayName?:string | undefined;
    /** The collection of open extensions defined for the task list. Nullable. */
    extensions?:Extension[] | undefined;
    /** True if the user is owner of the given task list. */
    isOwner?:boolean | undefined;
    /** True if the task list is shared with other users */
    isShared?:boolean | undefined;
    /** The tasks in this task list. Read-only. Nullable. */
    tasks?:TodoTask[] | undefined;
    /** Property indicating the list name if the given list is a well-known list. Possible values are: none, defaultList, flaggedEmails, unknownFutureValue. */
    wellknownListName?:WellknownListName | undefined;
}
