import {createTodoTaskFromDiscriminatorValue} from './createTodoTaskFromDiscriminatorValue';
import {TodoTaskImpl} from './index';
import {TodoTask} from './todoTask';
import {TodoTaskCollectionResponse} from './todoTaskCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TodoTaskCollectionResponseImpl implements AdditionalDataHolder, Parsable, TodoTaskCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TodoTask[] | undefined;
    /**
     * Instantiates a new TodoTaskCollectionResponse and sets the default values.
     * @param todoTaskCollectionResponseParameterValue 
     */
    public constructor(todoTaskCollectionResponseParameterValue?: TodoTaskCollectionResponse | undefined) {
        this.additionalData = todoTaskCollectionResponseParameterValue?.additionalData ? todoTaskCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = todoTaskCollectionResponseParameterValue?.nextLink ;
        this.value = todoTaskCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TodoTaskImpl>(createTodoTaskFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TodoTaskImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TodoTaskImpl(element));});
        writer.writeCollectionOfObjectValues<TodoTaskImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
