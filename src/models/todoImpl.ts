import {createTodoTaskListFromDiscriminatorValue} from './createTodoTaskListFromDiscriminatorValue';
import {EntityImpl, TodoTaskListImpl} from './index';
import {Todo} from './todo';
import {TodoTaskList} from './todoTaskList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class TodoImpl extends EntityImpl implements Todo {
    /** The task lists in the users mailbox. */
    public lists?: TodoTaskList[] | undefined;
    /**
     * Instantiates a new todo and sets the default values.
     * @param todoParameterValue 
     */
    public constructor(todoParameterValue?: Todo | undefined) {
        super(todoParameterValue);
        const listsArrValue: TodoTaskListImpl[] = []; todoParameterValue?.lists?.forEach(element => {listsArrValue.push(element instanceof TodoTaskListImpl? element : new TodoTaskListImpl(element));});
        this.lists = listsArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "lists": n => { this.lists = n.getCollectionOfObjectValues<TodoTaskListImpl>(createTodoTaskListFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.lists && this.lists.length != 0){        const listsArrValue: TodoTaskListImpl[] = []; this.lists?.forEach(element => {listsArrValue.push(element instanceof TodoTaskListImpl? element : new TodoTaskListImpl(element));});
            writer.writeCollectionOfObjectValues<TodoTaskListImpl>("lists", listsArrValue);
        }
    };
}
