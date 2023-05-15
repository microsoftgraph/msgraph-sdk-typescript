import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createTodoTaskFromDiscriminatorValue} from './createTodoTaskFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Extension} from './extension';
import {serializeExtension} from './serializeExtension';
import {serializeTodoTask} from './serializeTodoTask';
import {TodoTask} from './todoTask';
import {TodoTaskList} from './todoTaskList';
import {WellknownListName} from './wellknownListName';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTodoTaskList(todoTaskList: TodoTaskList | undefined = {} as TodoTaskList) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(todoTaskList),
        "displayName": n => { todoTaskList.displayName = n.getStringValue(); },
        "extensions": n => { todoTaskList.extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
        "isOwner": n => { todoTaskList.isOwner = n.getBooleanValue(); },
        "isShared": n => { todoTaskList.isShared = n.getBooleanValue(); },
        "tasks": n => { todoTaskList.tasks = n.getCollectionOfObjectValues<TodoTask>(createTodoTaskFromDiscriminatorValue); },
        "wellknownListName": n => { todoTaskList.wellknownListName = n.getEnumValue<WellknownListName>(WellknownListName); },
    }
}
