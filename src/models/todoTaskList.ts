import type {Entity} from './entity';
import type {Extension} from './extension';
import type {TodoTask} from './todoTask';
import {WellknownListName} from './wellknownListName';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface TodoTaskList extends Entity, Parsable {
    /**
     * The name of the task list.
     */
    displayName?: string | undefined;
    /**
     * The collection of open extensions defined for the task list. Nullable.
     */
    extensions?: Extension[] | undefined;
    /**
     * True if the user is owner of the given task list.
     */
    isOwner?: boolean | undefined;
    /**
     * True if the task list is shared with other users
     */
    isShared?: boolean | undefined;
    /**
     * The tasks in this task list. Read-only. Nullable.
     */
    tasks?: TodoTask[] | undefined;
    /**
     * The wellknownListName property
     */
    wellknownListName?: WellknownListName | undefined;
}
