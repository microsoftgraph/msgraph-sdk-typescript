import {createTodoTaskListFromDiscriminatorValue} from './createTodoTaskListFromDiscriminatorValue';
import {TodoTaskListImpl} from './index';
import {TodoTaskList} from './todoTaskList';
import {TodoTaskListCollectionResponse} from './todoTaskListCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TodoTaskListCollectionResponseImpl implements AdditionalDataHolder, Parsable, TodoTaskListCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TodoTaskList[] | undefined;
    /**
     * Instantiates a new TodoTaskListCollectionResponse and sets the default values.
     * @param todoTaskListCollectionResponseParameterValue 
     */
    public constructor(todoTaskListCollectionResponseParameterValue?: TodoTaskListCollectionResponse | undefined) {
        this.additionalData = todoTaskListCollectionResponseParameterValue?.additionalData ? todoTaskListCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = todoTaskListCollectionResponseParameterValue?.nextLink ;
        this.value = todoTaskListCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TodoTaskListImpl>(createTodoTaskListFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: TodoTaskListImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TodoTaskListImpl(element));});
        writer.writeCollectionOfObjectValues<TodoTaskListImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
