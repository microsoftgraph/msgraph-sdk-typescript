import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createTodoTaskFromDiscriminatorValue} from './createTodoTaskFromDiscriminatorValue';
import {Extension} from './extension';
import {EntityImpl, ExtensionImpl, TodoTaskImpl} from './index';
import {TodoTask} from './todoTask';
import {TodoTaskList} from './todoTaskList';
import {WellknownListName} from './wellknownListName';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class TodoTaskListImpl extends EntityImpl implements TodoTaskList {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The name of the task list. */
    public displayName?: string | undefined;
    /** The collection of open extensions defined for the task list. Nullable. */
    public extensions?: Extension[] | undefined;
    /** True if the user is owner of the given task list. */
    public isOwner?: boolean | undefined;
    /** True if the task list is shared with other users */
    public isShared?: boolean | undefined;
    /** The tasks in this task list. Read-only. Nullable. */
    public tasks?: TodoTask[] | undefined;
    /** Property indicating the list name if the given list is a well-known list. Possible values are: none, defaultList, flaggedEmails, unknownFutureValue. */
    public wellknownListName?: WellknownListName | undefined;
    /**
     * Instantiates a new todoTaskList and sets the default values.
     * @param todoTaskListParameterValue 
     */
    public constructor(todoTaskListParameterValue?: TodoTaskList | undefined) {
        super(todoTaskListParameterValue);
        this.additionalData = todoTaskListParameterValue?.additionalData ? todoTaskListParameterValue?.additionalData! : {};
        this.displayName = todoTaskListParameterValue?.displayName;
        const extensionsArrValue: ExtensionImpl[] = []; todoTaskListParameterValue.extensions?.forEach(element => {extensionsArrValue.push(element instanceof ExtensionImpl? element : new ExtensionImpl(element));});
        this.extensions = extensionsArrValue;
        this.isOwner = todoTaskListParameterValue?.isOwner;
        this.isShared = todoTaskListParameterValue?.isShared;
        const tasksArrValue: TodoTaskImpl[] = []; todoTaskListParameterValue.tasks?.forEach(element => {tasksArrValue.push(element instanceof TodoTaskImpl? element : new TodoTaskImpl(element));});
        this.tasks = tasksArrValue;
        this.wellknownListName = todoTaskListParameterValue?.wellknownListName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "extensions": n => { this.extensions = n.getCollectionOfObjectValues<ExtensionImpl>(createExtensionFromDiscriminatorValue); },
            "isOwner": n => { this.isOwner = n.getBooleanValue(); },
            "isShared": n => { this.isShared = n.getBooleanValue(); },
            "tasks": n => { this.tasks = n.getCollectionOfObjectValues<TodoTaskImpl>(createTodoTaskFromDiscriminatorValue); },
            "wellknownListName": n => { this.wellknownListName = n.getEnumValue<WellknownListName>(WellknownListName); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = []; this.extensions?.forEach(element => {extensionsArrValue.push(element instanceof ExtensionImpl? element : new ExtensionImpl(element));});
            writer.writeCollectionOfObjectValues<ExtensionImpl>("extensions", extensionsArrValue);
        }
        if(this.isOwner){
            writer.writeBooleanValue("isOwner", this.isOwner);
        }
        if(this.isShared){
            writer.writeBooleanValue("isShared", this.isShared);
        }
        if(this.tasks && this.tasks.length != 0){        const tasksArrValue: TodoTaskImpl[] = []; this.tasks?.forEach(element => {tasksArrValue.push(element instanceof TodoTaskImpl? element : new TodoTaskImpl(element));});
            writer.writeCollectionOfObjectValues<TodoTaskImpl>("tasks", tasksArrValue);
        }
        if(this.wellknownListName){
            writer.writeEnumValue<WellknownListName>("wellknownListName", this.wellknownListName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
