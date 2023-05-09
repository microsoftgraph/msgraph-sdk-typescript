import {Extension} from './extension';
import {serializeEntity} from './serializeEntity';
import {serializeExtension} from './serializeExtension';
import {serializeTodoTask} from './serializeTodoTask';
import {TodoTask} from './todoTask';
import {TodoTaskList} from './todoTaskList';
import {WellknownListName} from './wellknownListName';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTodoTaskList(writer: SerializationWriter, todoTaskList: TodoTaskList | undefined = {} as TodoTaskList) : void {
        serializeEntity(writer, todoTaskList)
        writer.writeStringValue("displayName", todoTaskList.displayName);
        writer.writeCollectionOfObjectValues<Extension>("extensions", todoTaskList.extensions, serializeExtension);
        writer.writeBooleanValue("isOwner", todoTaskList.isOwner);
        writer.writeBooleanValue("isShared", todoTaskList.isShared);
        writer.writeCollectionOfObjectValues<TodoTask>("tasks", todoTaskList.tasks, serializeTodoTask);
        writer.writeEnumValue<WellknownListName>("wellknownListName", todoTaskList.wellknownListName);
}
