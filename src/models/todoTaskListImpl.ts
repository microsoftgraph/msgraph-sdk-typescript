import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createTodoTaskFromDiscriminatorValue} from './createTodoTaskFromDiscriminatorValue';
import {Extension} from './extension';
import {EntityImpl, ExtensionImpl, TodoTaskImpl} from './index';
import {TodoTask} from './todoTask';
import {TodoTaskList} from './todoTaskList';
import {WellknownListName} from './wellknownListName';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class TodoTaskListImpl extends EntityImpl implements TodoTaskList {
    /** The name of the task list. */
    private _displayName?: string | undefined;
    /** The collection of open extensions defined for the task list. Nullable. */
    private _extensions?: Extension[] | undefined;
    /** True if the user is owner of the given task list. */
    private _isOwner?: boolean | undefined;
    /** True if the task list is shared with other users */
    private _isShared?: boolean | undefined;
    /** The tasks in this task list. Read-only. Nullable. */
    private _tasks?: TodoTask[] | undefined;
    /** Property indicating the list name if the given list is a well-known list. Possible values are: none, defaultList, flaggedEmails, unknownFutureValue. */
    private _wellknownListName?: WellknownListName | undefined;
    /**
     * Instantiates a new todoTaskList and sets the default values.
     * @param todoTaskListParameterValue 
     */
    public constructor(todoTaskListParameterValue?: TodoTaskList | undefined) {
        super(todoTaskListParameterValue);
        this._displayName = todoTaskListParameterValue?.displayName;
        this._extensions = todoTaskListParameterValue?.extensions;
        this._isOwner = todoTaskListParameterValue?.isOwner;
        this._isShared = todoTaskListParameterValue?.isShared;
        this._tasks = todoTaskListParameterValue?.tasks;
        this._wellknownListName = todoTaskListParameterValue?.wellknownListName;
    };
    /**
     * Gets the displayName property value. The name of the task list.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the task list.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the task list. Nullable.
     * @returns a ExtensionInterface
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the task list. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        if(value) {
            const extensionsArrValue: ExtensionImpl[] = [];
            this.extensions?.forEach(element => {
                extensionsArrValue.push((element instanceof ExtensionImpl? element:new ExtensionImpl(element)));
            });
            this._extensions = extensionsArrValue;
        }
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
     * Gets the isOwner property value. True if the user is owner of the given task list.
     * @returns a boolean
     */
    public get isOwner() {
        return this._isOwner;
    };
    /**
     * Sets the isOwner property value. True if the user is owner of the given task list.
     * @param value Value to set for the isOwner property.
     */
    public set isOwner(value: boolean | undefined) {
        if(value) {
            this._isOwner = value;
        }
    };
    /**
     * Gets the isShared property value. True if the task list is shared with other users
     * @returns a boolean
     */
    public get isShared() {
        return this._isShared;
    };
    /**
     * Sets the isShared property value. True if the task list is shared with other users
     * @param value Value to set for the isShared property.
     */
    public set isShared(value: boolean | undefined) {
        if(value) {
            this._isShared = value;
        }
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
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = [];
        this.extensions?.forEach(element => {
            extensionsArrValue.push((element instanceof ExtensionImpl? element:new ExtensionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ExtensionImpl>("extensions", extensionsArrValue);
        }
        if(this.isOwner){
            writer.writeBooleanValue("isOwner", this.isOwner);
        }
        if(this.isShared){
            writer.writeBooleanValue("isShared", this.isShared);
        }
        if(this.tasks && this.tasks.length != 0){        const tasksArrValue: TodoTaskImpl[] = [];
        this.tasks?.forEach(element => {
            tasksArrValue.push((element instanceof TodoTaskImpl? element:new TodoTaskImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TodoTaskImpl>("tasks", tasksArrValue);
        }
        if(this.wellknownListName){
            writer.writeEnumValue<WellknownListName>("wellknownListName", this.wellknownListName);
        }
    };
    /**
     * Gets the tasks property value. The tasks in this task list. Read-only. Nullable.
     * @returns a TodoTaskInterface
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Sets the tasks property value. The tasks in this task list. Read-only. Nullable.
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: TodoTask[] | undefined) {
        if(value) {
            const tasksArrValue: TodoTaskImpl[] = [];
            this.tasks?.forEach(element => {
                tasksArrValue.push((element instanceof TodoTaskImpl? element:new TodoTaskImpl(element)));
            });
            this._tasks = tasksArrValue;
        }
    };
    /**
     * Gets the wellknownListName property value. Property indicating the list name if the given list is a well-known list. Possible values are: none, defaultList, flaggedEmails, unknownFutureValue.
     * @returns a wellknownListName
     */
    public get wellknownListName() {
        return this._wellknownListName;
    };
    /**
     * Sets the wellknownListName property value. Property indicating the list name if the given list is a well-known list. Possible values are: none, defaultList, flaggedEmails, unknownFutureValue.
     * @param value Value to set for the wellknownListName property.
     */
    public set wellknownListName(value: WellknownListName | undefined) {
        if(value) {
            this._wellknownListName = value;
        }
    };
}
