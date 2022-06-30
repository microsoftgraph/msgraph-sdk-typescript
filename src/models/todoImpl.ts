import {createTodoTaskListFromDiscriminatorValue} from './createTodoTaskListFromDiscriminatorValue';
import {EntityImpl, TodoTaskListImpl} from './index';
import {Todo} from './todo';
import {TodoTaskList} from './todoTaskList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class TodoImpl extends EntityImpl implements Todo {
    /** The task lists in the users mailbox. */
    private _lists?: TodoTaskList[] | undefined;
    /**
     * Instantiates a new todo and sets the default values.
     * @param todoParameterValue 
     */
    public constructor(todoParameterValue?: Todo | undefined) {
        super(todoParameterValue);
        this._lists = todoParameterValue?.lists;
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
     * Gets the lists property value. The task lists in the users mailbox.
     * @returns a TodoTaskListInterface
     */
    public get lists() {
        return this._lists;
    };
    /**
     * Sets the lists property value. The task lists in the users mailbox.
     * @param value Value to set for the lists property.
     */
    public set lists(value: TodoTaskList[] | undefined) {
        if(value) {
            const listsArrValue: TodoTaskListImpl[] = [];
            this.lists?.forEach(element => {
                listsArrValue.push((element instanceof TodoTaskListImpl? element:new TodoTaskListImpl(element)));
            });
            this._lists = listsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.lists && this.lists.length != 0){        const listsArrValue: TodoTaskListImpl[] = [];
        this.lists?.forEach(element => {
            listsArrValue.push((element instanceof TodoTaskListImpl? element:new TodoTaskListImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TodoTaskListImpl>("lists", listsArrValue);
        }
    };
}
